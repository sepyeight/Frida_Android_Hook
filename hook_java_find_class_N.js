/**
* up to android7.0
* enumerateClassLoader and try to load class by name.
*/
function java_get_loader(class_name) {
    var loader_list = Java.enumerateClassLoadersSync();
    if(loader_list == null){
        console.log("[E] loader list is null");
        return null;
    }
    console.log("[V] loader list length is "+ loader_list.length);
    for (var i=0; i<loader_list.length; i++) {
        var loader = loader_list[i];
        console.log("[V] class loader[" + i + "] info " + loader);
        try {
            var java_class = loader.loadClass(class_name);
            console.log("[V] find class " + class_name + " successed!");
            return loader;
        } catch (error) {
            console.log("[E] find class " + class_name + " failed!");
        }
    }
    return null;
}

function java_find_class() {
    var java_class_name = "com.zebra.carcloud.openapi.simplesdk.f";
    console.log("[V] find class name is "+ java_class_name);
    var loader = java_get_loader(java_class_name);
    var clazz = null;
    if (loader != null) {
        Java.classFactory.loader = loader;
        clazz = Java.use(java_class_name);
    } else {
        console.log("[E] nothing can be done!")
    }
    return clazz;
}

function begin() {
    if (Java.available) {
        Java.perform(function () {
            console.log("[V] begin....");
            var clazz = java_find_class();
            console.log("[V] class info " + clazz);
            console.log("[V] finish....");
        });
    }
}

setTimeout(begin(), 0);