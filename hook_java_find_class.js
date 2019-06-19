function js_find_real_loader(java_class_name, android_class_loader_name, android_class_loader_list) {
    console.log("[V] try to load "+ android_class_loader_name);
    if (Java.available) {
        Java.perform(function () {
            Java.choose(android_class_loader_name, {
                onMatch: function (instance) {
                    console.log("[V] " + instance);
                    android_class_loader_list.push(instance);
                },
                onComplete: function () {
                    console.log("[V] load class loader finished!");
                    var real_loader = null;
                    for (var i in android_class_loader_list) {
                        try {
                            var java_clazz = android_class_loader_list[i].findClass(java_class_name);
                            console.log("[V] find class " + java_class_name + " in " + android_class_loader_name + "[" + i + "]");
                            real_loader = android_class_loader_list[i];
                        } catch (error) {
                            console.log("[E] can't find class " + java_class_name + " in " + android_class_loader_name + "[" + i + "]");
                        }
                    }
                    console.log("[V] find class loader finished!");
                    return real_loader;
                }
            })
        });
    }
}

function find_class() {
    var java_class_name = "com.zebra.carcloud.openapi.simplesdk.f";
    var android_class_loader_name_list = ["dalvik.system.DexClassLoader", "dalvik.system.PathClassLoader"];
    var real_loader = null;
    for (var i = android_class_loader_name_list.length - 1; i >= 0; i--) {
        var android_class_loader_list = [];
        real_loader = js_find_real_loader(java_class_name, android_class_loader_name_list[i], android_class_loader_list);
    }
    if (real_loader != null) {
        Java.classFactory.loader = real_loader;
        Java.use(java_class_name);
    }else{
        console.log("[E] class loader is null, load class failed!");
    }
}

setTimeout(find_class, 0);