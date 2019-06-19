//try to load class
function hook_class_loader_load_class(java_class_name) {
    var target_class = null;
    var base_loader = Java.use("dalvik.system.BaseDexClassLoader");
    var lang_class = Java.use("java.lang.Class");
    if (base_loader != null) {
        console.log("[V] base_loader is loaded!");
        base_loader.$init.overload("java.lang.String", "java.io.File", "java.lang.String", "java.lang.ClassLoader").implementation = function (str1, file, str2, loader) {
            var ret = this.$init(str1, file, str2, loader);
            var clazz_obj = Java.cast(this.getClass(), lang_class);
            console.log("[V] class loader name is " + clazz_obj.getName());
            return ret;
        };
        base_loader.loadClass.overload("java.lang.String", "boolean").implementation = function (name) {
            var clazz_obj = Java.cast(this.getClass(), lang_class);
            console.log("[V] class loader " + clazz_obj.getName() + " load class name " + name);
            var result = this.loadClass(name, false);
            return result;
        };
        base_loader.findClass.implementation = function (name) {
            var result = this.findClass(name);
            var clazz_obj = Java.cast(this.getClass(), lang_class);
            console.log("[V] class loader " + clazz_obj.getName() + " find class name " + name);

            if (target_class == null) {
                try {
                    console.log("[V] try to load class " + java_class_name);
                    target_class = this.loadClass(java_class_name);
                    console.log("[V] class loader " + clazz_obj.getName() + " load class name " + java_class_name + " successful!");
                } catch (error) {
                    console.log("[E] load class " + java_class_name + " failed");
                }
            }
            return result;
        }
    }

    return target_class;
}

function begin() {
    if (Java.available) {
        Java.perform(function () {
            console.log("[V] begin....");
            var java_class_name = "com.zebra.carcloud.openapi.simplesdk.b";
            hook_class_loader_load_class(java_class_name);
            console.log("[V] finish....");
        });
    }
}

setTimeout(begin(), 0);