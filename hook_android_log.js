function hookLog() {
    if (Java.available) {
        Java.perform(function () {
            var Log = Java.use("android.util.Log");
            if (Log != undefined) {
                Log.e.overload("java.lang.String", "java.lang.String").implementation = function (tag, msg) {
                    console.log(Log + ".e tag is " + tag + " msg is " + msg);
                    return this.e("Frida", msg);
                }
            } else {
                console.log("class " + Log + "not found!");
            }
        })
    }

    var logPrintPoint = undefined;
    var exports = Module.enumerateExportsSync("liblog.so");
    for (var i = 0; i < exports.length; i++) {
        if (exports[i].name == "__android_log_print") {
            logPrintPoint = exports[i].address;
            break;
        }
    }

    Interceptor.attach(logPrintPoint, {
        onEnter: function (args) {
            // console.log("catch...");
            var buf = Memory.allocUtf8String("Frida");
            var tag = ptr("6");
            this.buf = buf;
            args[0] = tag;
            args[1] = this.buf;
            // console.log("replace finish!!!");
        }
    });
}


setTimeout(hookLog, 0);