setTimeout(hook, 0);

function intercepter() {
    Interceptor.attach(Module.getExportByName(null, "dlopen"), {
        onEnter: function (args) {
            this.name = Memory.readCString(args[0]);
            console.log("file name is " + this.name);
        },
        onLeave: function (revtal) {
            if (this.name.includes("libmono.so")) {
                hook_mono();
            }
        }
    });
}

function hook_mono() {
    var module = Process.getModuleByName("libmono.so");
    console.log("module name->" + module.name + " module address->" + module.base);
    show_mono_info(module);
    // dump_so(module.base);

    var addr = module.base.add(0x196C4C);
    print_addr_info(addr);
    console.log("mono_image_open_from_data_with_name address is " + addr);

    Interceptor.attach(addr, {
        onEnter: function (args) {
            console.log("onEnter...");
            this.name = Memory.readCString(args[5]);
            this.data = args[0];
            this.size = args[1].toInt32();
            console.log("mono_image_open_from_data_with_name info: name->" + this.name + ", size->" + this.size);
        },
        onLeave: function (revtal) {
            console.log("onLeave...");
            var data = Memory.readByteArray(revtal, this.size);
            send(JSON.stringify({
                file_name: this.name.replace(/\//g, "."),
                file_size: this.size,
            }, null, 2), data);
        }
    });
}

function show_mono_info(module) {
    module.enumerateExports().forEach(function (sym) {
        console.log("name->" + sym.name + ", address->" + sym.address);
    });
}

function print_addr_info(address) {
    console.log(hexdump(address, {
        offset: 0,
        lengyh: 16,
        header: true,
        ansi: true
    }));
}

function dump_so(address) {
    Memory.protect(address, 0x3b5000, 'rw-');
    send(JSON.stringify({
        file_name: "libmono.so",
    }, null, 2), Memory.readByteArray(address, 0x3b5000));
}

function hook_java() {
    if(Java.available){
        Java.perform(function () {
            var System = Java.use("java.lang.System");
            if (System != undefined) {
                System.loadLibrary.overload("java.lang.String").implementation = function (str) {
                    console.log("System.loadLibrary load lib->" + str);
                    if(str == "fmod"){
                       // this.load("/data/app/com.jiuyao.game.fzlr-1/lib/arm/libxhook.so");
                       // this.load("/data/app/com.jiuyao.game.fzlr-1/lib/arm/libhook.so");
                       this.loadLibrary(str);
                    }
                }
            } else {
                console.log("class " + System + " not found!");
            }
        });
    }
}

function hook() {
    hook_java();
}