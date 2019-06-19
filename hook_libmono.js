function hook(){

//typedef struct _MonoImage {
//     int ref_count;
//     void *raw_data_handle;
//     char *raw_data;
//     uint32_t raw_data_len;
// } MonoImage;

    var MonoImageMemory = Memory.alloc(100);
    var MonoImageStuct = NativeFunction(MonoImageMemory, 'pointer', ['int', 'void', 'char', 'unit32']);

}


function hook_native_dlopen() {
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

function print_addr_info(address) {
    console.log(hexdump(address, {
        offset: 0,
        lengyh: 16,
        header: true,
        ansi: true
    }));
}

setTimeout(hook);