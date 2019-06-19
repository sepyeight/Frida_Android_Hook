function hook() {
    var symbols = Module.enumerateSymbolsSync("libart.so");

    var addrFindClass = undefined;
    var addrGetMethodID = undefined;
    var addrGetStaticMethodID = undefined;
    var addrGetStringUTFChars = undefined;
    var addrNewStringUTF = undefined;
    var addrGetObjectClass = undefined;
    var addrGetObjectField = undefined;
    var addrGetArrayLength = undefined;
    var addrGetByteArrayElements = undefined;
    var addrGetSuperclass = undefined;
    var addrGetStaticIntField = undefined;
    var addrGetStaticFieldID = undefined;
    var addrReleaseStringUTFChars = undefined;
    var addrDeleteLocalRef = undefined;

    symbols.forEach(function (sym) {
        if (sym.name == "_ZN3art3JNI9FindClassEP7_JNIEnvPKc") {
            addrFindClass = sym.address;
            console.log("[V]FindClass address " + addrFindClass);
        } else if (sym.name == "_ZN3art3JNI11GetMethodIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetMethodID = sym.address;
        } else if (sym.name == "_ZN3art3JNI17GetStaticMethodIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetStaticMethodID = sym.address;
        } else if (sym.name == "_ZN3art3JNI17GetStringUTFCharsEP7_JNIEnvP8_jstringPh") {
            addrGetStringUTFChars = sym.address;
        } else if (sym.name == "_ZN3art3JNI12NewStringUTFEP7_JNIEnvPKc") {
            addrNewStringUTF = sym.address;
        } else if (sym.name == "_ZN3art3JNI14GetObjectClassEP7_JNIEnvP8_jobject") {
            addrGetObjectClass = sym.address;
        } else if (sym.name == "_ZN3art3JNI14GetObjectFieldEP7_JNIEnvP8_jobjectP9_jfieldID") {
            addrGetObjectField = sym.address;
        } else if (sym.name == "_ZN3art3JNI14GetArrayLengthEP7_JNIEnvP7_jarray") {
            addrGetArrayLength = sym.address;
        } else if (sym.name == "_ZN3art3JNI20GetByteArrayElementsEP7_JNIEnvP11_jbyteArrayPh") {
            addrGetByteArrayElements = sym.address;
        } else if (sym.name == "_ZN3art3JNI13GetSuperclassEP7_JNIEnvP7_jclass") {
            addrGetSuperclass = sym.address;
        } else if (sym.name == "_ZN3art3JNI17GetStaticIntFieldEP7_JNIEnvP7_jclassP9_jfieldID") {
            addrGetStaticIntField = sym.address;
        } else if (sym.name == "_ZN3art3JNI16GetStaticFieldIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetStaticFieldID = sym.address;
        } else if (sym.name == "_ZN3art3JNI21ReleaseStringUTFCharsEP7_JNIEnvP8_jstringPKc") {
            addrReleaseStringUTFChars = sym.address;
        } else if (sym.name == "_ZN3art3JNI14DeleteLocalRefEP7_JNIEnvP8_jobject") {
            addrDeleteLocalRef = sym.address;
        }
    });

    if (addrFindClass != undefined) {
        Interceptor.attach(addrFindClass, {
            onEnter: function (args) {
                console.log("[V]FindClass->" + Memory.readCString(args[1]));
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetMethodID != undefined) {
        Interceptor.attach(addrGetMethodID, {
            onEnter: function (args) {
                var env = Java.vm.getEnv();
                // var cls = env.findClass("java/lang/Class");
                // var mid = env.getMethodId(cls, "getName", "()Ljava/lang/String;");
                console.log("[V]GetMethodID->" + env.getClassName(args[1]));
                console.log("\t[I]GetMethodID::method->" + Memory.readCString(args[2]));
                console.log("\t[I]GetMethodID::sig->" + Memory.readCString(args[3]));
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetStaticMethodID != undefined) {
        Interceptor.attach(addrGetStaticMethodID, {
            onEnter: function (args) {
                var env = Java.vm.getEnv();
                console.log("[V]GetStaticMethodID->" + env.getClassName(args[1]));
                console.log("\t[I]GetStaticMethodID::method->" + Memory.readCString(args[2]));
                console.log("\t[I]GetStaticMethodID::sig->" + Memory.readCString(args[3]));
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetStringUTFChars != undefined) {
        Interceptor.attach(addrGetStringUTFChars, {
            onEnter: function (args) {
                var env = Java.vm.getEnv();
                console.log("[V]GetStringUTFChars->" + env.stringFromJni(args[1]));
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrNewStringUTF != undefined) {
        Interceptor.attach(addrNewStringUTF, {
            onEnter: function (args) {
                if(Memory.readUtf8String(args[1]) != ""){
                    console.log("[V]NewStringUTF->" + Memory.readUtf8String(args[1]));
                }
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetObjectClass != undefined) {
        Interceptor.attach(addrGetObjectClass, {
            onEnter: function (args) {
                var env = Java.vm.getEnv();
                console.log("[V]GetObjectClass->" + env.getObjectClassName(args[1]));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetObjectField != undefined) {
        Interceptor.attach(addrGetObjectField, {
            onEnter: function (args) {
                var env = Java.vm.getEnv();
                var cls = env.getObjectClass(args[1]);
                console.log("[V]GetObjectField->" + env.getClassName(cls));
            },
            onLeave: function (retval) {
                var env = Java.vm.getEnv();
                console.log("\t[I]GetObjectField::fid->" + env.getObjectClassName(retval));
            }
        });
    }


    if(addrGetArrayLength != undefined){
       Interceptor.attach(addrGetArrayLength, {
            onEnter: function (args) {},
            onLeave: function (retval) {
                var env = Java.vm.getEnv();
                console.log("[V]GetArrayLength::size->" + retval.toInt32());
            }
        });
    }

    // if(addrGetByteArrayElements != undefined){
    //    Interceptor.attach(addrGetByteArrayElements, {
    //         onEnter: function (args) {
    //         },
    //         onLeave: function (retval) {
    //         }
    //     });
    // }


    if (addrGetSuperclass != undefined) {
        Interceptor.attach(addrGetSuperclass, {
            onEnter: function (args) {
                var env = Java.vm.getEnv();
                console.log("[V]GetSuperclass->" + env.getClassName(args[1]));
            },
            onLeave: function (retval) {
                var env = Java.vm.getEnv();
                console.log("\t[I]GetSuperclass::SuperClass->" + env.getClassName(retval));
            }
        });
    }


    if (addrGetStaticIntField != undefined) {
        Interceptor.attach(addrGetStaticIntField, {
            onEnter: function (args) {
                var env = Java.vm.getEnv();
                console.log("[V]GetStaticIntField->" + env.getClassName(args[1]));
            },
            onLeave: function (retval) {
                console.log("\t[I]GetStaticIntField::value->" + retval.toInt32());
            }
        });
    }


    if (addrGetStaticFieldID != undefined) {
        Interceptor.attach(addrGetStaticFieldID, {
            onEnter: function (args) {
                var env = Java.vm.getEnv();
                console.log("[V]GetStaticFieldID->" + env.getClassName(args[1]));
                console.log("\t[V]GetStaticFieldID::name->" + Memory.readCString(args[2]));
                console.log("\t[V]GetStaticFieldID::sig->" + Memory.readCString(args[3]));
            },
            onLeave: function (retval) {
            }
        });
    }


    // if (addrReleaseStringUTFChars != undefined) {
    //     Interceptor.attach(addrReleaseStringUTFChars, {
    //         onEnter: function (args) {
    //         },
    //         onLeave: function (retval) {
    //         }
    //     });
    // }

    if (addrDeleteLocalRef != undefined) {
        Interceptor.attach(addrDeleteLocalRef, {
            onEnter: function (args) {
                var env = Java.vm.getEnv();
                console.log("[V]DeleteLocalRef::Object->" + env.getObjectClassName(args[1]));
            },
            onLeave: function (retval) {
            }
        });
    }

}

setImmediate(hook);