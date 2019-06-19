function hook_0() {
    if (Java.available) {
        Java.perform(function () {
            var System = Java.use("java.lang.System");
            if (System != undefined) {
                System.loadLibrary.implementation = function (str) {
                    console.log("lib name is " + str);
                    this.loadLibrary(str);
                }
            } else {
                console.log("class System not found!");
            }
        });
    }
}

function hook(){
    Java.perform(function() {
        const System = Java.use('java.lang.System');
        const Runtime = Java.use('java.lang.Runtime');
        const VMStack = Java.use('dalvik.system.VMStack');

        System.loadLibrary.implementation = function(library) {
            try {
                console.log('System.loadLibrary("' + library + '")');
                const loaded = Runtime.getRuntime().loadLibrary0(VMStack.getCallingClassLoader(), library);
                return loaded;
            } catch(ex) {
                console.log(ex);
            }
        };

        System.load.implementation = function(library) {
            try {
                console.log('System.load("' + library + '")');
                const loaded = Runtime.getRuntime().load0(VMStack.getCallingClassLoader(), library);
                return loaded;
            } catch(ex) {
                console.log(ex);
            }
        };
    });
}

setImmediate(hook_0());