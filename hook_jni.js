function hook() {
    var symbols = Module.enumerateSymbolsSync("libart.so");
    var addrGetStringUTFChars = undefined;
    var addrNewStringUTF = undefined;
    var addrFindClass = undefined;
    var addrGetMethodID = undefined;
    var addrGetStaticMethodID = undefined;
    var addrGetFieldID = undefined;
    var addrGetStaticFieldID = undefined;
    var addrRegisterNativeMethods = undefined;
    var addrCallObjectMethod = undefined;
    var addrGetVersion = undefined;
    var addrDefineClass = undefined;
    var addrFromReflectedMethod = undefined;
    var addrFromReflectedField = undefined;
    var addrToReflectedMethod = undefined;
    var addrToReflectedField = undefined;
    var addrGetObjectClass = undefined;
    var addrGetSuperclass = undefined;
    var addrIsAssignableFrom = undefined;
    var addrIsInstanceOf = undefined;
    var addrThrow = undefined;
    var addrThrowNew = undefined;
    var addrExceptionCheck = undefined;
    var addrExceptionClear = undefined;
    var addrExceptionDescribe = undefined;
    var addrExceptionOccurred = undefined;
    var addrFatalError = undefined;
    var addrPushLocalFrame = undefined;
    var addrPopLocalFrame = undefined;
    var addrEnsureLocalCapacity = undefined;
    var addrNewGlobalRef = undefined;
    var addrDeleteGlobalRef = undefined;
    var addrNewWeakGlobalRef = undefined;
    var addrDeleteWeakGlobalRef = undefined;
    var addrNewLocalRef = undefined;
    var addrDeleteLocalRef = undefined;
    var addrIsSameObject = undefined;
    var addrAllocObject = undefined;
    var addrNewObject = undefined;
    var addrNewObjectV = undefined;
    var addrNewObjectA = undefined;
    var addrCallObjectMethodV = undefined;
    var addrCallObjectMethodA = undefined;
    var addrCallBooleanMethod = undefined;
    var addrCallBooleanMethodV = undefined;
    var addrCallBooleanMethodA = undefined;
    var addrCallByteMethod = undefined;
    var addrCallCharMethod = undefined;
    var addrCallDoubleMethod = undefined;
    var addrCallFloatMethod = undefined;
    var addrCallIntMethod = undefined;
    var addrCallLongMethod = undefined;
    var addrCallShortMethod = undefined;
    var addrCallVoidMethod = undefined;
    var addrCallNonvirtualObjectMethod = undefined;
    var addrCallNonvirtualBooleanMethod = undefined;
    var addrCallNonvirtualByteMethod = undefined;
    var addrCallNonvirtualCharMethod = undefined;
    var addrCallNonvirtualShortMethod = undefined;
    var addrCallNonvirtualIntMethod = undefined;
    var addrCallNonvirtualLongMethod = undefined;
    var addrCallNonvirtualFloatMethod = undefined;
    var addrCallNonvirtualDoubleMethod = undefined;
    var addrCallNonvirtualVoidMethod = undefined;
    var addrGetObjectField = undefined;
    var addrGetStaticObjectField = undefined;
    var addrSetObjectField = undefined;
    var addrSetStaticObjectField = undefined;
    var addrGetBooleanField = undefined;
    var addrGetByteField = undefined;
    var addrGetCharField = undefined;
    var addrGetShortField = undefined;
    var addrGetIntField = undefined;
    var addrGetLongField = undefined;
    var addrGetFloatField = undefined;
    var addrGetDoubleField = undefined;
    var addrGetStaticBooleanField = undefined;
    var addrGetStaticByteField = undefined;
    var addrGetStaticCharField = undefined;
    var addrGetStaticShortField = undefined;
    var addrGetStaticIntField = undefined;
    var addrGetStaticLongField = undefined;
    var addrGetStaticFloatField = undefined;
    var addrGetStaticDoubleField = undefined;
    var addrSetBooleanField = undefined;
    var addrSetByteField = undefined;
    var addrSetCharField = undefined;
    var addrSetFloatField = undefined;
    var addrSetDoubleField = undefined;
    var addrSetIntField = undefined;
    var addrSetLongField = undefined;
    var addrSetShortField = undefined;
    var addrSetStaticBooleanField = undefined;
    var addrSetStaticByteField = undefined;
    var addrSetStaticCharField = undefined;
    var addrSetStaticFloatField = undefined;
    var addrSetStaticDoubleField = undefined;
    var addrSetStaticIntField = undefined;
    var addrSetStaticLongField = undefined;
    var addrSetStaticShortField = undefined;
    var addrCallStaticObjectMethod = undefined;
    var addrCallStaticBooleanMethod = undefined;
    var addrCallStaticByteMethod = undefined;
    var addrCallStaticCharMethod = undefined;
    var addrCallStaticShortMethod = undefined;
    var addrCallStaticIntMethod = undefined;
    var addrCallStaticLongMethod = undefined;
    var addrCallStaticFloatMethod = undefined;
    var addrCallStaticDoubleMethod = undefined;
    var addrCallStaticVoidMethod = undefined;
    var addrNewString = undefined;
    var addrGetStringLength = undefined;
    var addrGetStringUTFLength = undefined;
    var addrGetStringRegion = undefined;
    var addrGetStringUTFRegion = undefined;
    var addrGetStringChars = undefined;
    var addrReleaseStringChars = undefined;
    var addrReleaseStringUTFChars = undefined;
    var addrGetArrayLength = undefined;
    var addrGetObjectArrayElement = undefined;
    var addrSetObjectArrayElement = undefined;
    var addrNewBooleanArray = undefined;
    var addrNewByteArray = undefined;
    var addrNewCharArray = undefined;
    var addrNewDoubleArray = undefined;
    var addrNewFloatArray = undefined;
    var addrNewIntArray = undefined;
    var addrNewLongArray = undefined;
    var addrNewObjectArray = undefined;
    var addrNewShortArray = undefined;
    var addrGetBooleanArrayElements = undefined;
    var addrGetByteArrayElements = undefined;
    var addrGetCharArrayElements = undefined;
    var addrGetDoubleArrayElements = undefined;
    var addrGetFloatArrayElements = undefined;
    var addrGetIntArrayElements = undefined;
    var addrGetLongArrayElements = undefined;
    var addrGetShortArrayElements = undefined;
    var addrGetBooleanArrayRegion = undefined;
    var addrGetByteArrayRegion = undefined;
    var addrGetCharArrayRegion = undefined;
    var addrGetDoubleArrayRegion = undefined;
    var addrGetFloatArrayRegion = undefined;
    var addrGetIntArrayRegion = undefined;
    var addrGetLongArrayRegion = undefined;
    var addrGetShortArrayRegion = undefined;
    var addrSetBooleanArrayRegion = undefined;
    var addrSetByteArrayRegion = undefined;
    var addrSetCharArrayRegion = undefined;
    var addrSetDoubleArrayRegion = undefined;
    var addrSetFloatArrayRegion = undefined;
    var addrSetIntArrayRegion = undefined;
    var addrSetLongArrayRegion = undefined;
    var addrSetShortArrayRegion = undefined;
    var addrMonitorEnter = undefined;
    var addrMonitorExit = undefined;
    var addrGetJavaVM = undefined;
    var addrNewDirectByteBuffer = undefined;
    var addrGetDirectBufferAddress = undefined;
    var addrGetDirectBufferCapacity = undefined;
    var addrGetObjectRefType = undefined;
    var addrEnsureLocalCapacityInternal = undefined;
    for (var i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        if (symbol.name == "_ZN3art3JNI17GetStringUTFCharsEP7_JNIEnvP8_jstringPh") {
            addrGetStringUTFChars = symbol.address;
            console.log("GetStringUTFChars is at " + addrGetStringUTFChars);
        } else if (symbol.name == "_ZN3art3JNI12NewStringUTFEP7_JNIEnvPKc") {
            addrNewStringUTF = symbol.address;
            console.log("NewStringUTF is at " + addrNewStringUTF);
        } else if (symbol.name == "_ZN3art3JNI9FindClassEP7_JNIEnvPKc") {
            addrFindClass = symbol.address;
            console.log("FindClass is at " + addrFindClass);
        } else if (symbol.name == "_ZN3art3JNI11GetMethodIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetMethodID = symbol.address;
            console.log("GetMethodID is at " + addrGetMethodID);
        } else if (symbol.name == "_ZN3art3JNI17GetStaticMethodIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetStaticMethodID = symbol.address;
            console.log("GetStaticMethodID is at " + addrGetStaticMethodID);
        } else if (symbol.name == "_ZN3art3JNI10GetFieldIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetFieldID = symbol.address;
            console.log("GetFieldID is at " + addrGetFieldID);
        } else if (symbol.name == "_ZN3art3JNI16GetStaticFieldIDEP7_JNIEnvP7_jclassPKcS6_") {
            addrGetStaticFieldID = symbol.address;
            console.log("GetStaticFieldID is at " + addrGetStaticFieldID);
        } else if (symbol.name == "_ZN3art3JNI16CallObjectMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz") {
            addrCallObjectMethod == symbol.address;
            console.log("CallObjectMethod is at " + addrCallObjectMethod);
        } else if (symbol.name == "_ZN3art3JNI21RegisterNativeMethodsEP7_JNIEnvP7_jclassPK15JNINativeMethodib") {
            addrRegisterNativeMethods = symbol.address;
            console.log("RegisterNativeMethods is at " + addrRegisterNativeMethods);
        } else if (symbol.name == "_ZN3art3JNI10GetVersionEP7_JNIEnv") {
            addrGetVersion = symbol.address;
            console.log("GetVersion is at " + addrGetVersion);
        } else if (symbol.name == "_ZN3art3JNI11DefineClassEP7_JNIEnvPKcP8_jobjectPKai") {
            addrDefineClass = symbol.address;
            console.log("DefineClass is at " + addrDefineClass);
        } else if (symbol.name == "_ZN3art3JNI19FromReflectedMethodEP7_JNIEnvP8_jobject") {
            addrFromReflectedMethod = symbol.address;
            console.log("FromReflectedMethod is at " + addrFromReflectedMethod);
        } else if (symbol.name == "_ZN3art3JNI18FromReflectedFieldEP7_JNIEnvP8_jobject") {
            addrFromReflectedField = symbol.address;
            console.log("FromReflectedField is at " + addrFromReflectedField);
        } else if (symbol.name == "_ZN3art3JNI17ToReflectedMethodEP7_JNIEnvP7_jclassP10_jmethodIDh") {
            addrToReflectedMethod = symbol.address;
            console.log("ToReflectedMethod is at " + addrToReflectedMethod);
        } else if (symbol.name == "_ZN3art3JNI16ToReflectedFieldEP7_JNIEnvP7_jclassP9_jfieldIDh") {
            addrToReflectedField = symbol.address;
            console.log("ToReflectedField is at " + addrToReflectedField);
        } else if (symbol.name == "_ZN3art3JNI14GetObjectClassEP7_JNIEnvP8_jobject") {
            addrGetObjectClass = symbol.address;
            console.log("GetObjectClass is at " + addrGetObjectClass);
        } else if (symbol.name == "_ZN3art3JNI13GetSuperclassEP7_JNIEnvP7_jclass") {
            addrGetSuperclass = symbol.address;
            console.log("GetSuperclass is at" + addrGetSuperclass);
        } else if (symbol.name == "_ZN3art3JNI16IsAssignableFromEP7_JNIEnvP7_jclassS4_") {
            addrIsAssignableFrom = symbol.address;
            console.log("IsAssignableFrom is at " + addrIsAssignableFrom);
        } else if (symbol.name == "_ZN3art3JNI12IsInstanceOfEP7_JNIEnvP8_jobjectP7_jclass") {
            addrIsInstanceOf = symbol.address;
            console.log("IsInstanceOf is at " + addrIsInstanceOf);
        } else if (symbol.name == "_ZN3art3JNI5ThrowEP7_JNIEnvP11_jthrowable") {
            addrThrow = symbol.address;
            console.log("Throw is at " + addrThrow);
        } else if (symbol.name == "_ZN3art3JNI8ThrowNewEP7_JNIEnvP7_jclassPKc") {
            addrThrowNew = symbol.address;
            console.log("ThrowNew is at " + addrThrowNew);
        } else if (symbol.name == "_ZN3art3JNI14ExceptionCheckEP7_JNIEnv") {
            addrExceptionCheck = symbol.address;
            console.log("ExceptionCheck is at " + addrExceptionCheck);
        } else if (symbol.name == "_ZN3art3JNI14ExceptionClearEP7_JNIEnv") {
            addrExceptionClear = symbol.address;
            console.log("ExceptionClear is at " + addrExceptionClear);
        } else if (symbol.name == "_ZN3art3JNI17ExceptionDescribeEP7_JNIEnv") {
            addrExceptionDescribe = symbol.address;
            console.log("ExceptionDescribe is at " + addrExceptionDescribe);
        } else if (symbol.name == "_ZN3art3JNI17ExceptionOccurredEP7_JNIEnv") {
            addrExceptionOccurred = symbol.address;
            console.log("ExceptionOccurred is at " + addrExceptionOccurred);
        } else if (symbol.name == "_ZN3art3JNI10FatalErrorEP7_JNIEnvPKc") {
            addrFatalError = symbol.address;
            console.log("FatalError is at " + addrFatalError);
        } else if (symbol.name == "_ZN3art3JNI14PushLocalFrameEP7_JNIEnvi") {
            addrPushLocalFrame = symbol.address;
            console.log("PushLocalFrame is at " + addrPushLocalFrame);
        } else if (symbol.name == "_ZN3art3JNI13PopLocalFrameEP7_JNIEnvP8_jobject") {
            addrPopLocalFrame = symbol.address;
            console.log("PopLocalFrame is at " + addrPopLocalFrame);
        } else if (symbol.name == "_ZN3art3JNI19EnsureLocalCapacityEP7_JNIEnvi") {
            addrEnsureLocalCapacity = symbol.address;
            console.log("EnsureLocalCapacity is at " + addrEnsureLocalCapacity);
        } else if (symbol.name == "_ZN3art3JNI12NewGlobalRefEP7_JNIEnvP8_jobject") {
            addrNewGlobalRef = symbol.address;
            console.log("NewGlobalRef is at " + addrNewGlobalRef);
        } else if (symbol.name == "_ZN3art3JNI15DeleteGlobalRefEP7_JNIEnvP8_jobject") {
            addrDeleteGlobalRef = symbol.address;
            console.log("DeleteGlobalRef is at " + addrDeleteGlobalRef);
        } else if (symbol.name == "_ZN3art3JNI16NewWeakGlobalRefEP7_JNIEnvP8_jobject") {
            addrNewWeakGlobalRef = symbol.address;
            console.log("NewWeakGlobalRef is at " + addrNewWeakGlobalRef);
        } else if (symbol.name == "_ZN3art3JNI19DeleteWeakGlobalRefEP7_JNIEnvP8_jobject") {
            addrDeleteWeakGlobalRef = symbol.address;
            console.log("DeleteWeakGlobalRef is at " + addrDeleteWeakGlobalRef);
        } else if (symbol.name == "_ZN3art3JNI11NewLocalRefEP7_JNIEnvP8_jobject") {
            addrNewLocalRef = symbol.address;
            console.log("NewLocalRef is at " + addrNewLocalRef);
        } else if (symbol.name == "_ZN3art3JNI14DeleteLocalRefEP7_JNIEnvP8_jobject") {
            addrDeleteLocalRef = symbol.address;
            console.log("DeleteLocalRef is at " + addrDeleteLocalRef);
        } else if (symbol.name == "_ZN3art3JNI12IsSameObjectEP7_JNIEnvP8_jobjectS4_") {
            addrIsSameObject = symbol.address;
            console.log("IsSameObject is at " + addrIsSameObject);
        } else if (symbol.name == "_ZN3art3JNI11AllocObjectEP7_JNIEnvP7_jclass") {
            addrAllocObject = symbol.address;
            console.log("AllocObject is at " + addrAllocObject);
        } else if (symbol.name == "_ZN3art3JNI9NewObjectEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrNewObject = symbol.address;
            console.log("NewObject is at " + addrNewObject);
        } else if (symbol.name == "_ZN3art3JNI10NewObjectVEP7_JNIEnvP7_jclassP10_jmethodIDSt9__va_list") {
            addrNewObjectV = symbol.address;
            console.log("NewObjectV is at " + addrNewObjectV);
        } else if (symbol.name == "_ZN3art3JNI10NewObjectAEP7_JNIEnvP7_jclassP10_jmethodIDP6jvalue") {
            addrNewObjectA = symbol.address;
            console.log("NewObjectA is at " + addrNewObjectA);
        } else if (symbol.name == "_ZN3art3JNI17CallObjectMethodVEP7_JNIEnvP8_jobjectP10_jmethodIDSt9__va_list") {
            addrCallObjectMethodV = symbol.address;
            console.log("CallObjectMethodV is at " + addrCallObjectMethodV);
        } else if (symbol.name == "_ZN3art3JNI17CallObjectMethodAEP7_JNIEnvP8_jobjectP10_jmethodIDP6jvalue") {
            addrCallObjectMethodA = symbol.address;
            console.log("CallObjectMethodA is at " + addrCallObjectMethodA);
        } else if (symbol.name == "_ZN3art3JNI17CallBooleanMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz") {
            addrCallBooleanMethod = symbol.address;
            console.log("CallBooleanMethod is at " + addrCallBooleanMethod);
        } else if (symbol.name == "_ZN3art3JNI18CallBooleanMethodVEP7_JNIEnvP8_jobjectP10_jmethodIDSt9__va_list") {
            addrCallBooleanMethodV = symbol.address;
            console.log("CallBooleanMethodV is at " + addrCallBooleanMethodV);
        } else if (symbol.name == "_ZN3art3JNI18CallBooleanMethodAEP7_JNIEnvP8_jobjectP10_jmethodIDP6jvalue") {
            addrCallBooleanMethodA = symbol.address;
            console.log("CallBooleanMethodA is at " + addrCallBooleanMethodA);
        } else if (symbol.name == "_ZN3art3JNI14CallByteMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz") {
            addrCallByteMethod = symbol.address;
            console.log("CallByteMethod is at " + addrCallByteMethod);
        } else if (symbol.name == "_ZN3art3JNI14CallCharMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz") {
            addrCallCharMethod = symbol.address;
            console.log("CallCharMethod is at " + addrCallCharMethod);
        } else if (symbol.name == "_ZN3art3JNI16CallDoubleMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz") {
            addrCallDoubleMethod = symbol.address;
            console.log("CallDoubleMethod is at " + addrCallDoubleMethod);
        } else if (symbol.name == "_ZN3art3JNI15CallFloatMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz") {
            addrCallFloatMethod = symbol.address;
            console.log("CallFloatMethod is at " + addrCallFloatMethod);
        } else if (symbol.name == "_ZN3art3JNI13CallIntMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz") {
            addrCallIntMethod = symbol.address;
            console.log("CallIntMethod is at " + addrCallIntMethod);
        } else if (symbol.name == "_ZN3art3JNI14CallLongMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz") {
            addrCallLongMethod = symbol.address;
            console.log("CallLongMethod is at " + addrCallLongMethod);
        } else if (symbol.name == "_ZN3art3JNI15CallShortMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz") {
            addrCallShortMethod = symbol.address;
            console.log("CallShortMethod is at " + addrCallShortMethod);
        } else if (symbol.name == "_ZN3art3JNI14CallVoidMethodEP7_JNIEnvP8_jobjectP10_jmethodIDz") {
            addrCallVoidMethod = symbol.address;
            console.log("CallVoidMethod is at " + addrCallVoidMethod);
        } else if (symbol.name == "_ZN3art3JNI26CallNonvirtualObjectMethodEP7_JNIEnvP8_jobjectP7_jclassP10_jmethodIDz") {
            addrCallNonvirtualObjectMethod = symbol.address;
            console.log("CallNonvirtualObjectMethod is at " + addrCallNonvirtualObjectMethod);
        } else if (symbol.name == "_ZN3art3JNI27CallNonvirtualBooleanMethodEP7_JNIEnvP8_jobjectP7_jclassP10_jmethodIDz") {
            addrCallNonvirtualBooleanMethod = symbol.address;
            console.log("CallNonvirtualBooleanMethod is at " + addrCallNonvirtualBooleanMethod);
        } else if (symbol.name == "_ZN3art3JNI24CallNonvirtualByteMethodEP7_JNIEnvP8_jobjectP7_jclassP10_jmethodIDz") {
            addrCallNonvirtualByteMethod = symbol.address;
            console.log("CallNonvirtualByteMethod is at " + addrCallNonvirtualByteMethod);
        } else if (symbol.name == "_ZN3art3JNI24CallNonvirtualCharMethodEP7_JNIEnvP8_jobjectP7_jclassP10_jmethodIDz") {
            addrCallNonvirtualCharMethod = symbol.address;
            console.log("CallNonvirtualCharMethod is at " + addrCallNonvirtualCharMethod);
        } else if (symbol.name == "_ZN3art3JNI25CallNonvirtualShortMethodEP7_JNIEnvP8_jobjectP7_jclassP10_jmethodIDz") {
            addrCallNonvirtualShortMethod = symbol.address;
            console.log("CallNonvirtualShortMethod is at " + addrCallNonvirtualShortMethod);
        } else if (symbol.name == "_ZN3art3JNI23CallNonvirtualIntMethodEP7_JNIEnvP8_jobjectP7_jclassP10_jmethodIDz") {
            addrCallNonvirtualIntMethod = symbol.address;
            console.log("CallNonvirtualIntMethod is at " + addrCallNonvirtualIntMethod);
        } else if (symbol.name == "_ZN3art3JNI24CallNonvirtualLongMethodEP7_JNIEnvP8_jobjectP7_jclassP10_jmethodIDz") {
            addrCallNonvirtualLongMethod = symbol.address;
            console.log("CallNonvirtualLongMethod is at " + addrCallNonvirtualLongMethod);
        } else if (symbol.name == "_ZN3art3JNI25CallNonvirtualFloatMethodEP7_JNIEnvP8_jobjectP7_jclassP10_jmethodIDz") {
            addrCallNonvirtualFloatMethod = symbol.address;
            console.log("CallNonvirtualFloatMethod is at " + addrCallNonvirtualFloatMethod);
        } else if (symbol.name == "_ZN3art3JNI26CallNonvirtualDoubleMethodEP7_JNIEnvP8_jobjectP7_jclassP10_jmethodIDz") {
            addrCallNonvirtualDoubleMethod = symbol.address;
            console.log("CallNonvirtualDoubleMethod is at " + addrCallNonvirtualDoubleMethod);
        } else if (symbol.name == "_ZN3art3JNI24CallNonvirtualVoidMethodEP7_JNIEnvP8_jobjectP7_jclassP10_jmethodIDz") {
            addrCallNonvirtualVoidMethod = symbol.address;
            console.log("CallNonvirtualVoidMethod is at " + addrCallNonvirtualVoidMethod);
        } else if (symbol.name == "_ZN3art3JNI14GetObjectFieldEP7_JNIEnvP8_jobjectP9_jfieldID") {
            addrGetObjectField = symbol.address;
            console.log("GetObjectField is at " + addrGetObjectField);
        } else if (symbol.name == "_ZN3art3JNI20GetStaticObjectFieldEP7_JNIEnvP7_jclassP9_jfieldID") {
            addrGetStaticObjectField = symbol.address;
            console.log("GetStaticObjectField is at " + addrGetStaticObjectField);
        } else if (symbol.name == "_ZN3art3JNI14SetObjectFieldEP7_JNIEnvP8_jobjectP9_jfieldIDS4_") {
            addrSetObjectField = symbol.address;
            console.log("SetObjectField is at " + addrSetObjectField);
        } else if (symbol.name == "_ZN3art3JNI20SetStaticObjectFieldEP7_JNIEnvP7_jclassP9_jfieldIDP8_jobject") {
            addrSetStaticObjectField = symbol.address;
            console.log("SetStaticObjectField is at " + addrSetStaticObjectField);
        } else if (symbol.name == "_ZN3art3JNI15GetBooleanFieldEP7_JNIEnvP8_jobjectP9_jfieldID") {
            addrGetBooleanField = symbol.address;
            console.log("GetBooleanField is at " + addrGetBooleanField);
        } else if (symbol.name == "_ZN3art3JNI12GetByteFieldEP7_JNIEnvP8_jobjectP9_jfieldID") {
            addrGetByteField = symbol.address;
            console.log("GetByteField is at " + addrGetByteField);
        } else if (symbol.name == "_ZN3art3JNI12GetCharFieldEP7_JNIEnvP8_jobjectP9_jfieldID") {
            addrGetCharField = symbol.address;
            console.log("GetCharField is at " + addrGetCharField);
        } else if (symbol.name == "_ZN3art3JNI13GetShortFieldEP7_JNIEnvP8_jobjectP9_jfieldID") {
            addrGetShortField = symbol.address;
            console.log("GetShortField is at " + addrGetShortField);
        } else if (symbol.name == "_ZN3art3JNI11GetIntFieldEP7_JNIEnvP8_jobjectP9_jfieldID") {
            addrGetIntField = symbol.address;
            console.log("GetIntField is at " + addrGetIntField);
        } else if (symbol.name == "_ZN3art3JNI12GetLongFieldEP7_JNIEnvP8_jobjectP9_jfieldID") {
            addrGetLongField = symbol.address;
            console.log("GetLongField is at " + addrGetLongField);
        } else if (symbol.name == "_ZN3art3JNI13GetFloatFieldEP7_JNIEnvP8_jobjectP9_jfieldID") {
            addrGetFloatField = symbol.address;
            console.log("GetFloatField is at " + addrGetFloatField);
        } else if (symbol.name == "_ZN3art3JNI14GetDoubleFieldEP7_JNIEnvP8_jobjectP9_jfieldID") {
            addrGetDoubleField = symbol.address;
            console.log("GetDoubleField is at " + addrGetDoubleField);
        } else if (symbol.name == "_ZN3art3JNI21GetStaticBooleanFieldEP7_JNIEnvP7_jclassP9_jfieldID") {
            addrGetStaticBooleanField = symbol.address;
            console.log("GetStaticBooleanField is at " + addrGetStaticBooleanField);
        } else if (symbol.name == "_ZN3art3JNI18GetStaticByteFieldEP7_JNIEnvP7_jclassP9_jfieldID") {
            addrGetStaticByteField = symbol.address;
            console.log("GetStaticByteField is at " + addrGetStaticByteField);
        } else if (symbol.name == "_ZN3art3JNI18GetStaticCharFieldEP7_JNIEnvP7_jclassP9_jfieldID") {
            addrGetStaticCharField = symbol.address;
            console.log("GetStaticCharField is at " + addrGetStaticCharField);
        } else if (symbol.name == "_ZN3art3JNI19GetStaticShortFieldEP7_JNIEnvP7_jclassP9_jfieldID") {
            addrGetStaticShortField = symbol.address;
            console.log("GetStaticShortField is at " + addrGetStaticShortField);
        } else if (symbol.name == "_ZN3art3JNI17GetStaticIntFieldEP7_JNIEnvP7_jclassP9_jfieldID") {
            addrGetStaticIntField = symbol.address;
            console.log("GetStaticIntField is at " + addrGetStaticIntField);
        } else if (symbol.name == "_ZN3art3JNI18GetStaticLongFieldEP7_JNIEnvP7_jclassP9_jfieldID") {
            addrGetStaticLongField = symbol.address;
            console.log("GetStaticLongField is at " + addrGetStaticLongField);
        } else if (symbol.name == "_ZN3art3JNI19GetStaticFloatFieldEP7_JNIEnvP7_jclassP9_jfieldID") {
            addrGetStaticFloatField = symbol.address;
            console.log("GetStaticFloatField is at " + addrGetStaticFloatField);
        } else if (symbol.name == "_ZN3art3JNI20GetStaticDoubleFieldEP7_JNIEnvP7_jclassP9_jfieldID") {
            addrGetStaticDoubleField = symbol.address;
            console.log("GetStaticDoubleField is at " + addrGetStaticDoubleField);
        } else if (symbol.name == "_ZN3art3JNI15SetBooleanFieldEP7_JNIEnvP8_jobjectP9_jfieldIDh") {
            addrSetBooleanField = symbol.address;
            console.log("SetBooleanField is at " + addrSetBooleanField);
        } else if (symbol.name == "_ZN3art3JNI12SetByteFieldEP7_JNIEnvP8_jobjectP9_jfieldIDa") {
            addrSetByteField = symbol.address;
            console.log("SetByteField is at " + addrSetByteField);
        } else if (symbol.name == "_ZN3art3JNI12SetCharFieldEP7_JNIEnvP8_jobjectP9_jfieldIDt") {
            addrSetCharField = symbol.address;
            console.log("SetCharField is at " + addrSetCharField);
        } else if (symbol.name == "_ZN3art3JNI13SetFloatFieldEP7_JNIEnvP8_jobjectP9_jfieldIDf") {
            addrSetFloatField = symbol.address;
            console.log("SetFloatField is at " + addrSetFloatField);
        } else if (symbol.name == "_ZN3art3JNI14SetDoubleFieldEP7_JNIEnvP8_jobjectP9_jfieldIDd") {
            addrSetDoubleField = symbol.address;
            console.log("SetDoubleField is at " + addrSetDoubleField);
        } else if (symbol.name == "_ZN3art3JNI11SetIntFieldEP7_JNIEnvP8_jobjectP9_jfieldIDi") {
            addrSetIntField = symbol.address;
            console.log("SetIntField is at " + addrSetIntField);
        } else if (symbol.name == "_ZN3art3JNI12SetLongFieldEP7_JNIEnvP8_jobjectP9_jfieldIDx") {
            addrSetLongField = symbol.address;
            console.log("SetLongField is at " + addrSetLongField);
        } else if (symbol.name == "_ZN3art3JNI13SetShortFieldEP7_JNIEnvP8_jobjectP9_jfieldIDs") {
            addrSetShortField = symbol.address;
            console.log("SetShortField is at " + addrSetShortField);
        } else if (symbol.name == "_ZN3art3JNI21SetStaticBooleanFieldEP7_JNIEnvP7_jclassP9_jfieldIDh") {
            addrSetStaticBooleanField = symbol.address;
            console.log("SetStaticBooleanField is at " + addrSetStaticBooleanField);
        } else if (symbol.name == "_ZN3art3JNI18SetStaticByteFieldEP7_JNIEnvP7_jclassP9_jfieldIDa") {
            addrSetStaticByteField = symbol.address;
            console.log("SetStaticByteField is at " + addrSetStaticByteField);
        } else if (symbol.name == "_ZN3art3JNI18SetStaticCharFieldEP7_JNIEnvP7_jclassP9_jfieldIDt") {
            addrSetStaticCharField = symbol.address;
            console.log("SetStaticCharField is at " + addrSetStaticCharField);
        } else if (symbol.name == "_ZN3art3JNI19SetStaticFloatFieldEP7_JNIEnvP7_jclassP9_jfieldIDf") {
            addrSetStaticFloatField = symbol.address;
            console.log("SetStaticFloatField is at " + addrSetStaticFloatField);
        } else if (symbol.name == "_ZN3art3JNI20SetStaticDoubleFieldEP7_JNIEnvP7_jclassP9_jfieldIDd") {
            addrSetStaticDoubleField = symbol.address;
            console.log("SetStaticDoubleField is at " + addrSetStaticDoubleField);
        } else if (symbol.name == "_ZN3art3JNI17SetStaticIntFieldEP7_JNIEnvP7_jclassP9_jfieldIDi") {
            addrSetStaticIntField = symbol.address;
            console.log("SetStaticIntField is at " + addrSetStaticIntField);
        } else if (symbol.name == "_ZN3art3JNI18SetStaticLongFieldEP7_JNIEnvP7_jclassP9_jfieldIDx") {
            addrSetStaticLongField = symbol.address;
            console.log("SetStaticLongField is at " + addrSetStaticLongField);
        } else if (symbol.name == "_ZN3art3JNI19SetStaticShortFieldEP7_JNIEnvP7_jclassP9_jfieldIDs") {
            addrSetStaticShortField = symbol.address;
            console.log("SetStaticShortField is at " + addrSetStaticShortField);
        } else if (symbol.name == "_ZN3art3JNI22CallStaticObjectMethodEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrCallStaticObjectMethod = symbol.address;
            console.log("CallStaticObjectMethod is at " + addrCallStaticObjectMethod);
        } else if (symbol.name == "_ZN3art3JNI23CallStaticBooleanMethodEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrCallStaticBooleanMethod = symbol.address;
            console.log("CallStaticBooleanMethod is at " + addrCallStaticBooleanMethod);
        } else if (symbol.name == "_ZN3art3JNI20CallStaticByteMethodEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrCallStaticByteMethod = symbol.address;
            console.log("CallStaticByteMethod is at " + addrCallStaticByteMethod);
        } else if (symbol.name == "_ZN3art3JNI20CallStaticCharMethodEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrCallStaticCharMethod = symbol.address;
            console.log("CallStaticCharMethod is at " + addrCallStaticCharMethod);
        } else if (symbol.name == "_ZN3art3JNI21CallStaticShortMethodEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrCallStaticShortMethod = symbol.address;
            console.log("CallStaticShortMethod is at " + addrCallStaticShortMethod);
        } else if (symbol.name == "_ZN3art3JNI19CallStaticIntMethodEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrCallStaticIntMethod = symbol.address;
            console.log("CallStaticIntMethod is at " + addrCallStaticIntMethod);
        } else if (symbol.name == "_ZN3art3JNI20CallStaticLongMethodEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrCallStaticLongMethod = symbol.address;
            console.log("CallStaticLongMethod is at " + addrCallStaticLongMethod);
        } else if (symbol.name == "_ZN3art3JNI21CallStaticFloatMethodEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrCallStaticFloatMethod = symbol.address;
            console.log("CallStaticFloatMethod is at " + addrCallStaticFloatMethod);
        } else if (symbol.name == "_ZN3art3JNI22CallStaticDoubleMethodEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrCallStaticDoubleMethod = symbol.address;
            console.log("CallStaticDoubleMethod is at " + addrCallStaticDoubleMethod);
        } else if (symbol.name == "_ZN3art3JNI20CallStaticVoidMethodEP7_JNIEnvP7_jclassP10_jmethodIDz") {
            addrCallStaticVoidMethod = symbol.address;
            console.log("CallStaticVoidMethod is at " + addrCallStaticVoidMethod);
        } else if (symbol.name == "_ZN3art3JNI9NewStringEP7_JNIEnvPKti") {
            addrNewString = symbol.address;
            console.log("NewString is at " + addrNewString);
        } else if (symbol.name == "_ZN3art3JNI15GetStringLengthEP7_JNIEnvP8_jstring") {
            addrGetStringLength = symbol.address;
            console.log("GetStringLength is at " + addrGetStringLength);
        } else if (symbol.name == "_ZN3art3JNI18GetStringUTFLengthEP7_JNIEnvP8_jstring") {
            addrGetStringUTFLength = symbol.address;
            console.log("GetStringUTFLength is at " + addrGetStringUTFLength);
        } else if (symbol.name == "_ZN3art3JNI15GetStringRegionEP7_JNIEnvP8_jstringiiPt") {
            addrGetStringRegion = symbol.address;
            console.log("GetStringRegion is at " + addrGetStringRegion);
        } else if (symbol.name == "_ZN3art3JNI18GetStringUTFRegionEP7_JNIEnvP8_jstringiiPc") {
            addrGetStringUTFRegion = symbol.address;
            console.log("GetStringUTFRegion is at " + addrGetStringUTFRegion);
        } else if (symbol.name == "_ZN3art3JNI14GetStringCharsEP7_JNIEnvP8_jstringPh") {
            addrGetStringChars = symbol.address;
            console.log("GetStringChars is at " + addrGetStringChars);
        } else if (symbol.name == "_ZN3art3JNI18ReleaseStringCharsEP7_JNIEnvP8_jstringPKt") {
            addrReleaseStringChars = symbol.address;
            console.log("ReleaseStringChars is at " + addrReleaseStringChars);
        } else if (symbol.name == "_ZN3art3JNI21ReleaseStringUTFCharsEP7_JNIEnvP8_jstringPKc") {
            addrReleaseStringUTFChars = symbol.address;
            console.log("ReleaseStringUTFChars is at " + addrReleaseStringUTFChars);
        } else if (symbol.name == "_ZN3art3JNI14GetArrayLengthEP7_JNIEnvP7_jarray") {
            addrGetArrayLength = symbol.address;
            console.log("GetArrayLength is at " + addrGetArrayLength);
        } else if (symbol.name == "_ZN3art3JNI21GetObjectArrayElementEP7_JNIEnvP13_jobjectArrayi") {
            addrGetObjectArrayElement = symbol.address;
            console.log("GetObjectArrayElement is at " + addrGetObjectArrayElement);
        } else if (symbol.name == "_ZN3art3JNI21SetObjectArrayElementEP7_JNIEnvP13_jobjectArrayiP8_jobject") {
            addrSetObjectArrayElement = symbol.address;
            console.log("SetObjectArrayElement is at " + addrSetObjectArrayElement);
        } else if (symbol.name == "_ZN3art3JNI15NewBooleanArrayEP7_JNIEnvi") {
            addrNewBooleanArray = symbol.address;
            console.log("NewBooleanArray is at " + addrNewBooleanArray);
        } else if (symbol.name == "_ZN3art3JNI12NewByteArrayEP7_JNIEnvi") {
            addrNewByteArray = symbol.address;
            console.log("NewByteArray is at " + addrNewByteArray);
        } else if (symbol.name == "_ZN3art3JNI12NewCharArrayEP7_JNIEnvi") {
            addrNewCharArray = symbol.address;
            console.log("NewCharArray is at " + addrNewCharArray);
        } else if (symbol.name == "_ZN3art3JNI14NewDoubleArrayEP7_JNIEnvi") {
            addrNewDoubleArray = symbol.address;
            console.log("NewDoubleArray is at " + addrNewDoubleArray);
        } else if (symbol.name == "_ZN3art3JNI13NewFloatArrayEP7_JNIEnvi") {
            addrNewFloatArray = symbol.address;
            console.log("NewFloatArray is at " + addrNewFloatArray);
        } else if (symbol.name == "_ZN3art3JNI11NewIntArrayEP7_JNIEnvi") {
            addrNewIntArray = symbol.address;
            console.log("NewIntArray is at " + addrNewIntArray);
        } else if (symbol.name == "_ZN3art3JNI12NewLongArrayEP7_JNIEnvi") {
            addrNewLongArray = symbol.address;
            console.log("NewLongArray is at " + addrNewLongArray);
        } else if (symbol.name == "_ZN3art3JNI14NewObjectArrayEP7_JNIEnviP7_jclassP8_jobject") {
            addrNewObjectArray = symbol.address;
            console.log("NewObjectArray is at " + addrNewObjectArray);
        } else if (symbol.name == "_ZN3art3JNI13NewShortArrayEP7_JNIEnvi") {
            addrNewShortArray = symbol.address;
            console.log("NewShortArray is at " + addrNewShortArray);
        } else if (symbol.name == "_ZN3art3JNI23GetBooleanArrayElementsEP7_JNIEnvP14_jbooleanArrayPh") {
            addrGetBooleanArrayElements = symbol.address;
            console.log("GetBooleanArrayElements is at " + addrGetBooleanArrayElements);
        } else if (symbol.name == "_ZN3art3JNI20GetByteArrayElementsEP7_JNIEnvP11_jbyteArrayPh") {
            addrGetByteArrayElements = symbol.address;
            console.log("GetByteArrayElements is at " + addrGetByteArrayElements);
        } else if (symbol.name == "_ZN3art3JNI20GetCharArrayElementsEP7_JNIEnvP11_jcharArrayPh") {
            addrGetCharArrayElements = symbol.address;
            console.log("GetCharArrayElements is at " + addrGetCharArrayElements);
        } else if (symbol.name == "_ZN3art3JNI22GetDoubleArrayElementsEP7_JNIEnvP13_jdoubleArrayPh") {
            addrGetDoubleArrayElements = symbol.address;
            console.log("GetDoubleArrayElements is at " + addrGetDoubleArrayElements);
        } else if (symbol.name == "_ZN3art3JNI21GetFloatArrayElementsEP7_JNIEnvP12_jfloatArrayPh") {
            addrGetFloatArrayElements = symbol.address;
            console.log("GetFloatArrayElements is at " + addrGetFloatArrayElements);
        } else if (symbol.name == "_ZN3art3JNI19GetIntArrayElementsEP7_JNIEnvP10_jintArrayPh") {
            addrGetIntArrayElements = symbol.address;
            console.log("GetIntArrayElements is at " + addrGetIntArrayElements);
        } else if (symbol.name == "_ZN3art3JNI20GetLongArrayElementsEP7_JNIEnvP11_jlongArrayPh") {
            addrGetLongArrayElements = symbol.address;
            console.log("GetLongArrayElements is at " + addrGetLongArrayElements);
        } else if (symbol.name == "_ZN3art3JNI21GetShortArrayElementsEP7_JNIEnvP12_jshortArrayPh") {
            addrGetShortArrayElements = symbol.address;
            console.log("GetShortArrayElements is at " + addrGetShortArrayElements);
        } else if (symbol.name == "_ZN3art3JNI21GetBooleanArrayRegionEP7_JNIEnvP14_jbooleanArrayiiPh"){
            addrGetBooleanArrayRegion = symbol.address;
            console.log("GetBooleanArrayRegion is at " + addrGetBooleanArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI18GetByteArrayRegionEP7_JNIEnvP11_jbyteArrayiiPa"){
            addrGetByteArrayRegion = symbol.address;
            console.log("GetByteArrayRegion is at " + addrGetByteArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI18GetCharArrayRegionEP7_JNIEnvP11_jcharArrayiiPt"){
            addrGetCharArrayRegion = symbol.address;
            console.log("GetCharArrayRegion is at " + addrGetCharArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI20GetDoubleArrayRegionEP7_JNIEnvP13_jdoubleArrayiiPd"){
            addrGetDoubleArrayRegion = symbol.address;
            console.log("GetDoubleArrayRegion is at " + addrGetDoubleArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI19GetFloatArrayRegionEP7_JNIEnvP12_jfloatArrayiiPf"){
            addrGetFloatArrayRegion = symbol.address;
            console.log("GetFloatArrayRegion is at " + addrGetFloatArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI17GetIntArrayRegionEP7_JNIEnvP10_jintArrayiiPi"){
            addrGetIntArrayRegion = symbol.address;
            console.log("GetIntArrayRegion is at " + addrGetIntArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI18GetLongArrayRegionEP7_JNIEnvP11_jlongArrayiiPx"){
            addrGetLongArrayRegion = symbol.address;
            console.log("GetLongArrayRegion is at " + addrGetLongArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI19GetShortArrayRegionEP7_JNIEnvP12_jshortArrayiiPs"){
            addrGetShortArrayRegion = symbol.address;
            console.log("GetShortArrayRegion is at " + addrGetShortArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI21SetBooleanArrayRegionEP7_JNIEnvP14_jbooleanArrayiiPKh"){
            addrSetBooleanArrayRegion = symbol.address;
            console.log("SetBooleanArrayRegion is at " + addrSetBooleanArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI18SetByteArrayRegionEP7_JNIEnvP11_jbyteArrayiiPKa"){
            addrSetByteArrayRegion = symbol.address;
            console.log("SetByteArrayRegion is at " + addrSetByteArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI18SetCharArrayRegionEP7_JNIEnvP11_jcharArrayiiPKt"){
            addrSetCharArrayRegion = symbol.address;
            console.log("SetCharArrayRegion is at " + addrSetCharArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI20SetDoubleArrayRegionEP7_JNIEnvP13_jdoubleArrayiiPKd"){
            addrSetDoubleArrayRegion = symbol.address;
            console.log("SetDoubleArrayRegion is at " + addrSetDoubleArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI19SetFloatArrayRegionEP7_JNIEnvP12_jfloatArrayiiPKf"){
            addrSetFloatArrayRegion = symbol.address;
            console.log("SetFloatArrayRegion is at " + addrSetFloatArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI17SetIntArrayRegionEP7_JNIEnvP10_jintArrayiiPKi"){
            addrSetIntArrayRegion = symbol.address;
            console.log("SetIntArrayRegion is at " + addrSetIntArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI18SetLongArrayRegionEP7_JNIEnvP11_jlongArrayiiPKx"){
            addrSetLongArrayRegion = symbol.address;
            console.log("SetLongArrayRegion is at " + addrSetLongArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI19SetShortArrayRegionEP7_JNIEnvP12_jshortArrayiiPKs"){
            addrSetShortArrayRegion = symbol.address;
            console.log("SetShortArrayRegion is at " + addrSetShortArrayRegion);
        } else if (symbol.name == "_ZN3art3JNI12MonitorEnterEP7_JNIEnvP8_jobject"){
            addrMonitorEnter = symbol.address;
            console.log("MonitorEnter is at " + addrMonitorEnter);
        } else if (symbol.name == "_ZN3art3JNI11MonitorExitEP7_JNIEnvP8_jobject"){
            addrMonitorExit = symbol.address;
            console.log("MonitorExit is at " + addrMonitorExit);
        } else if (symbol.name == "_ZN3art3JNI9GetJavaVMEP7_JNIEnvPP7_JavaVM"){
            addrGetJavaVM = symbol.address;
            console.log("GetJavaVM is at " + addrGetJavaVM);
        } else if (symbol.name == "_ZN3art3JNI19NewDirectByteBufferEP7_JNIEnvPvx"){
            addrNewDirectByteBuffer = symbol.address;
            console.log("NewDirectByteBuffer is at " + addrNewDirectByteBuffer);
        } else if(symbol.name == "_ZN3art3JNI22GetDirectBufferAddressEP7_JNIEnvP8_jobject"){
            addrGetDirectBufferAddress = symbol.address;
            console.log("GetDirectBufferAddress is at " + addrGetDirectBufferAddress);
        } else if(symbol.name == "_ZN3art3JNI23GetDirectBufferCapacityEP7_JNIEnvP8_jobject"){
            addrGetDirectBufferCapacity = symbol.address;
            console.log("GetDirectBufferCapacity is at " + addrGetDirectBufferCapacity);
        } else if(symbol.name == "_ZN3art3JNI16GetObjectRefTypeEP7_JNIEnvP8_jobject"){
            addrGetObjectRefType  = symbol.address;
            console.log("GetObjectRefType is at " + addrGetObjectRefType);
        } else if (symbol.name == "_ZN3art3JNI27EnsureLocalCapacityInternalERNS_18ScopedObjectAccessEiPKc"){
            addrEnsureLocalCapacityInternal = symbol.address;
            console.log("EnsureLocalCapacityInternal is at " + addrEnsureLocalCapacityInternal);
        }

    }

    if (addrGetStringUTFChars != undefined) {
        Interceptor.attach(addrGetStringUTFChars, {
            onEnter: function (args) {
            },
            onLeave: function (retval) {
                if (retval != null) {
                    var bytes = Memory.readCString(retval);
                    console.log("[GetStringUTFChars] result:" + bytes);
                }
            }
        });
    }
    if (addrNewStringUTF != undefined) {
        Interceptor.attach(addrNewStringUTF, {
            onEnter: function (args) {
                if (args[1] != null) {
                    var string = Memory.readCString(args[1]);
                    console.log("[NewStringUTF] bytes:" + string);
                }
            },
            onLeave: function (retval) {
            }
        });
    }
    if (addrFindClass != undefined) {
        Interceptor.attach(addrFindClass, {
            onEnter: function (args) {
                if (args[1] != null) {
                    var name = Memory.readCString(args[1]);
                    console.log("[FindClass] name:" + name);
                }
            },
            onLeave: function (retval) {
            }
        });
    }
    if (addrGetMethodID != undefined) {
        Interceptor.attach(addrGetMethodID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetMethodID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetMethodID] name:" + name);
                    }

                }
            },
            onLeave: function (retval) {
            }
        });
    }
    if (addrGetStaticMethodID != undefined) {
        Interceptor.attach(addrGetStaticMethodID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetStaticMethodID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetStaticMethodID] name:" + name);
                    }

                }
            },
            onLeave: function (retval) {
            }
        });
    }
    if (addrGetFieldID != undefined) {
        Interceptor.attach(addrGetFieldID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetFieldID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetFieldID] name:" + name);
                    }

                }
            },
            onLeave: function (retval) {
            }
        });
    }
    if (addrGetStaticFieldID != undefined) {
        Interceptor.attach(addrGetStaticFieldID, {
            onEnter: function (args) {
                if (args[2] != null) {
                    var name = Memory.readCString(args[2]);
                    if (args[3] != null) {
                        var sig = Memory.readCString(args[3]);
                        console.log("[GetStaticFieldID] name:" + name + ", sig:" + sig);
                    } else {
                        console.log("[GetStaticFieldID] name:" + name);
                    }

                }
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrCallObjectMethod != undefined) {
        Interceptor.attach(addrCallObjectMethod, {
            onEnter: function (args) {
                console.log("[CallObjectMethod] method id is " + args[2]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrRegisterNativeMethods != undefined) {
        Interceptor.attach(addrRegisterNativeMethods, {
            onEnter: function (args) {
                console.log("[RegisterNativeMethods] method_count:", args[3]);
                var methods_ptr = ptr(args[2]);

                var method_count = parseInt(args[3]);
                for (var i = 0; i < method_count; i++) {
                    var name_ptr = Memory.readPointer(methods_ptr.add(i * 12));
                    var sig_ptr = Memory.readPointer(methods_ptr.add(i * 12 + 4));
                    var fnPtr_ptr = Memory.readPointer(methods_ptr.add(i * 12 + 8));

                    var name = Memory.readCString(name_ptr);
                    var sig = Memory.readCString(sig_ptr);
                    console.log("[RegisterNativeMethods] name:", name, "sig", sig, "fnPtr", fnPtr_ptr);

                }
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrDefineClass != undefined) {
        Interceptor.attach(addrDefineClass, {
            onLeave: function (retval) {
                console.log("[DefineClass] is null")
            }
        });
    }


    if (addrGetVersion != undefined) {
        Interceptor.attach(addrGetVersion, {
            onEnter: function (args) {

            },
            onLeave: function (retval) {
                console.log("[GetVersion] return:", retval.toInt32());
            }
        });
    }

    if (addrFromReflectedMethod != undefined) {
        Interceptor.attach(addrFromReflectedMethod, {
            onEnter: function (args) {
                console.log("[FromReflectedMethod] obj addr is " + args[1]);
            },
            onLeave: function (retval) {

            }
        });
    }

    if (addrFromReflectedField != undefined) {
        Interceptor.attach(addrFromReflectedField, {
            onEnter: function (args) {
                console.log("[FromReflectedField] obj addr is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrToReflectedMethod != undefined) {
        Interceptor.attach(addrToReflectedMethod, {
            onEnter: function (args) {
                console.log("[ToReflectedMethod] method id is " + args[1] + ", is true " + args[2]);
            },
            onLeave: function (retval) {
            }
        });
    }
    if (addrToReflectedField != undefined) {
        Interceptor.attach(addrToReflectedField, {
            onEnter: function (args) {
                console.log("[ToReflectedField] field id is " + args[1] + ", is true " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }

    if (addrGetObjectClass != undefined) {
        Interceptor.attach(addrGetObjectClass, {
            onEnter: function (args) {
                this.obj = args[1];

            },
            onLeave: function (retval) {
                console.log("[GetObjectClass] obj is " + this.obj + ", and return is " + retval);
            }
        });
    }


    if (addrGetSuperclass != undefined) {
        Interceptor.attach(addrGetSuperclass, {
            onEnter: function (args) {
                this.obj = args[1];
            },
            onLeave: function (retval) {
                console.log("[GetSuperclass] obj is " + this.obj + ", and return is " + retval);
            }
        });
    }


    if (addrIsAssignableFrom != undefined) {
        Interceptor.attach(addrIsAssignableFrom, {
            onEnter: function (args) {
                this.clazz1 = args[1];
                this.clazz2 = args[2];
            },
            onLeave: function (retval) {
                console.log("[IsAssignableFrom] class1 is " + this.clazz1 + ", clazz2 is " + this.clazz2 + " and return is " + retval);
            }
        });
    }


    if (addrIsInstanceOf != undefined) {
        Interceptor.attach(addrIsInstanceOf, {
            onEnter: function (args) {
                this.obj = args[1];
                this.clazz = args[2];
            },
            onLeave: function (retval) {
                console.log("[IsInstanceOf] obj is " + this.obj + ", class is " + this.clazz + " and return is " + retval);
            }
        });
    }


    if (addrThrow != undefined) {
        Interceptor.attach(addrThrow, {
            onEnter: function (args) {
                console.log("[Throw] exception is " + args[1]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrThrowNew != undefined) {
        Interceptor.attach(addrThrowNew, {
            onEnter: function (args) {
                console.log("[ThrowNew] exception is " + Memory.readCString(args[2]));
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrExceptionCheck != undefined) {
        Interceptor.attach(addrExceptionCheck, {
            onEnter: function (args) {
            },
            onLeave: function (retval) {
                console.log("[ExceptionCheck] is called! return is " + retval);
            }
        });
    }


    if (addrExceptionClear != undefined) {
        Interceptor.attach(addrExceptionClear, {
            onEnter: function (args) {
                console.log("[ExceptionClear] is called!");
            },
            onLeave: function (retval) {

            }
        });
    }

    if (addrExceptionDescribe != undefined) {
        Interceptor.attach(addrExceptionDescribe, {
            onEnter: function (args) {
                console.log("[ExceptionDescribe] is called!");
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrExceptionOccurred != undefined) {
        Interceptor.attach(addrExceptionOccurred, {
            onEnter: function (args) {
                console.log("[ExceptionOccurred] is called!");
            },
            onLeave: function (retval) {

            }
        });
    }

    if (addrFatalError != undefined) {
        Interceptor.attach(addrFatalError, {
            onEnter: function (args) {
                console.log("[FatalError] is called!");
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrPushLocalFrame != undefined) {
        Interceptor.attach(addrPushLocalFrame, {
            onEnter: function (args) {
                this.cap = args[1];
            },
            onLeave: function (retval) {
                console.log("[PushLocalFrame] cap is " + this.cap + " and return is " + retval);
            }
        });
    }


    if (addrPopLocalFrame != undefined) {
        Interceptor.attach(addrPopLocalFrame, {
            onEnter: function (args) {
                this.obj = args[1];
            },
            onLeave: function (retval) {
                console.log("[PopLocalFrame] obj is " + this.obj + " and return is " + retval);
            }
        });
    }


    if (addrEnsureLocalCapacity != undefined) {
        Interceptor.attach(addrEnsureLocalCapacity, {
            onEnter: function (args) {
                this.des = args[1];
            },
            onLeave: function (retval) {
                console.log("[EnsureLocalCapacity] des is " + this.des + " and return is " + retval);
            }
        });
    }


    if (addrNewGlobalRef != undefined) {
        Interceptor.attach(addrNewGlobalRef, {
            onEnter: function (args) {
                this.obj = args[1];
            },
            onLeave: function (retval) {
                console.log("[NewGlobalRef] obj is " + this.obj + " and return is " + retval);
            }
        });
    }


    if (addrDeleteGlobalRef != undefined) {
        Interceptor.attach(addrDeleteGlobalRef, {
            onEnter: function (args) {
                console.log("[DeleteGlobalRef] is called!");
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrNewWeakGlobalRef != undefined) {
        Interceptor.attach(addrNewWeakGlobalRef, {
            onEnter: function (args) {
                this.obj = args[1];
            },
            onLeave: function (retval) {
                console.log("[NewWeakGlobalRef] obj is " + this.obj + " and return is " + retval);
            }
        });
    }

    if (addrDeleteWeakGlobalRef != undefined) {
        Interceptor.attach(addrDeleteWeakGlobalRef, {
            onEnter: function (args) {
                console.log("[DeleteWeakGlobalRef] is called!");
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrNewLocalRef != undefined) {
        Interceptor.attach(addrNewLocalRef, {
            onEnter: function (args) {
                this.obj = args[1];
            },
            onLeave: function (retval) {
                console.log("[NewLocalRef] obj is " + this.obj + " and reurn is " + retval);
            }
        });
    }


    if (addrDeleteLocalRef != undefined) {
        Interceptor.attach(addrDeleteLocalRef, {
            onEnter: function (args) {
                console.log("[DeleteLocalRef] is called!");
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrIsSameObject != undefined) {
        Interceptor.attach(addrIsSameObject, {
            onEnter: function (args) {
                this.obj1 = args[1];
                this.obj2 = args[2];
            },
            onLeave: function (retval) {
                console.log("[IsSameObject] obj1 is " + this.obj1 + " and obj2 is " + this.obj2 + ", return is " + retval);
            }
        });
    }


    if (addrAllocObject != undefined) {
        Interceptor.attach(addrAllocObject, {
            onEnter: function (args) {
                this.obj = args[1];
            },
            onLeave: function (retval) {
                console.log("[AllocObject] obj is " + this.obj + " and return is " + retval);
            }
        });
    }


    if (addrNewObject != undefined) {
        Interceptor.attach(addrNewObject, {
            onEnter: function (args) {
                this.methodid = args[2];
            },
            onLeave: function (retval) {
                console.log("[NewObject] method id is " + this.methodid + " and return is " + retval);
            }
        });
    }


    if (addrNewObjectV != undefined) {
        Interceptor.attach(addrNewObjectV, {
            onEnter: function (args) {
                this.methodid = args[2];
            },
            onLeave: function (retval) {
                console.log("[NewObjectV] method is " + this.methodid + " and return is " + retval);
            }
        });
    }

    if (addrNewObjectA != undefined) {
        Interceptor.attach(addrNewObjectA, {
            onEnter: function (args) {
                this.methodid = args[2];
            },
            onLeave: function (retval) {
                console.log("[NewObjectA] method is " + this.methodid + " and return is " + retval);
            }
        });
    }


    if (addrCallObjectMethodV != undefined) {
        Interceptor.attach(addrCallObjectMethodV, {
            onEnter: function (args) {
                console.log("[CallObjectMethodV] method is " + args[2]);
            },
            onLeave: function (retval) {
                A
            }
        });
    }


    if (addrCallObjectMethodA != undefined) {
        Interceptor.attach(addrCallObjectMethodA, {
            onEnter: function (args) {
                console.log("[CallObjectMethod] method is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallBooleanMethod != undefined) {
        Interceptor.attach(addrCallBooleanMethod, {
            onEnter: function (args) {
                console.log("[CallBooleanMethod] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }

    if (addrCallBooleanMethodV != undefined) {
        Interceptor.attach(addrCallBooleanMethodV, {
            onEnter: function (args) {
                console.log("[CallBooleanMethodV] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }

    if (addrCallBooleanMethodA != undefined) {
        Interceptor.attach(addrCallBooleanMethodA, {
            onEnter: function (args) {
                console.log("[CallBooleanMethodA] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }

    if (addrCallByteMethod != undefined) {
        Interceptor.attach(addrCallByteMethod, {
            onEnter: function (args) {
                console.log("[CallByteMethod] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallCharMethod != undefined) {
        Interceptor.attach(addrCallCharMethod, {
            onEnter: function (args) {
                console.log("[CallCharMethod] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallDoubleMethod != undefined) {
        Interceptor.attach(addrCallDoubleMethod, {
            onEnter: function (args) {
                console.log("[CallDoubleMethod] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallFloatMethod != undefined) {
        Interceptor.attach(addrCallFloatMethod, {
            onEnter: function (args) {
                console.log("[CallFloatMethod] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallIntMethod != undefined) {
        Interceptor.attach(addrCallIntMethod, {
            onEnter: function (args) {
                console.log("[CallIntMethod] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallLongMethod != undefined) {
        Interceptor.attach(addrCallLongMethod, {
            onEnter: function (args) {
                console.log("[CallLongMethod] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallShortMethod != undefined) {
        Interceptor.attach(addrCallShortMethod, {
            onEnter: function (args) {
                console.log("[CallShortMethod] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallVoidMethod != undefined) {
        Interceptor.attach(addrCallVoidMethod, {
            onEnter: function (args) {
                console.log("[CallVoidMethod] method id is " + args[2]);
            },
            onLeave: function (retval) {

            }
        });
    }

    if (addrCallNonvirtualObjectMethod != undefined) {
        Interceptor.attach(addrCallNonvirtualObjectMethod, {
            onEnter: function (args) {
                console.log("[CallNonvirtualObjectMethod] method id is " + args[3]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallNonvirtualBooleanMethod != undefined) {
        Interceptor.attach(addrCallNonvirtualBooleanMethod, {
            onEnter: function (args) {
                console.log("[CallNonvirtualObjectMethod] method id is " + args[3]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrCallNonvirtualByteMethod != undefined) {
        Interceptor.attach(addrCallNonvirtualByteMethod, {
            onEnter: function (args) {
                console.log("[CallNonvirtualByteMethod] method id is " + args[3]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallNonvirtualCharMethod != undefined) {
        Interceptor.attach(addrCallNonvirtualCharMethod, {
            onEnter: function (args) {
                console.log("[CallNonvirtualCharMethod] method id is " + args[3]);
            },
            onLeave: function (retval) {

            }
        });
    }

    if (addrCallNonvirtualShortMethod != undefined) {
        Interceptor.attach(addrCallNonvirtualShortMethod, {
            onEnter: function (args) {
                console.log("[CallNonvirtualShortMethod] method id is " + args[3]);
            },
            onLeave: function (retval) {

            }
        });
    }


    if (addrCallNonvirtualIntMethod != undefined) {
        Interceptor.attach(addrCallNonvirtualIntMethod, {
            onEnter: function (args) {
                this.methodid = args[3];
            },
            onLeave: function (retval) {
                console.log("[CallNonvirtualIntMethod] method id is " + this.methodid + " and return is " + retval);
            }
        });
    }

    if (addrCallNonvirtualLongMethod != undefined) {
        Interceptor.attach(addrCallNonvirtualLongMethod, {
            onEnter: function (args) {
                this.methodid = args[3];
            },
            onLeave: function (retval) {
                console.log("[CallNonvirtualLongMethod] method id is " + this.methodid + " and return is " + retval);
            }
        });
    }


    if (addrCallNonvirtualFloatMethod != undefined) {
        Interceptor.attach(addrCallNonvirtualFloatMethod, {
            onEnter: function (args) {
                this.methodid = args[3];
            },
            onLeave: function (retval) {
                console.log("[CallNonvirtualFloatMethod] method id is " + this.methodid + " and return is " + retval);
            }
        });
    }

    if (addrCallNonvirtualDoubleMethod != undefined) {
        Interceptor.attach(addrCallNonvirtualDoubleMethod, {
            onEnter: function (args) {
                this.methodid = args[3];
            },
            onLeave: function (retval) {
                console.log("[CallNonvirtualDoubleMethod] method id is " + this.methodid + " and return is " + retval);
            }
        });
    }


    if (addrCallNonvirtualVoidMethod != undefined) {
        Interceptor.attach(addrCallNonvirtualVoidMethod, {
            onEnter: function (args) {
                console.log("[CallNonvirtualVoidMethod] method id is " + args[3]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetObjectField != undefined) {
        Interceptor.attach(addrGetObjectField, {
            onEnter: function (args) {
                console.log("[GetObjectField] obj is " + args[1] + " and field id is " + args[2]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetStaticObjectField != undefined) {
        Interceptor.attach(addrGetStaticObjectField, {
            onEnter: function (args) {
                console.log("[GetStaticObjectField] field id is " + args[2]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetObjectField != undefined) {
        Interceptor.attach(addrSetObjectField, {
            onEnter: function (args) {
                console.log("[SetObjectField] field id is " + args[2]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetStaticObjectField != undefined) {
        Interceptor.attach(addrSetStaticObjectField, {
            onEnter: function (args) {
                console.log("[SetStaticObjectField] field id is " + args[2]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetBooleanField != undefined) {
        Interceptor.attach(addrGetBooleanField, {
            onEnter: function (args) {
                console.log("[GetBooleanField] field id is " + args[2]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetByteField != undefined) {
        Interceptor.attach(addrGetByteField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetByteField] obj is " + this.obj + ", fid is " + this.fid + " and return is " + Memory.readByteArray(retval, 1));
            }
        });
    }

    if (addrGetCharField != undefined) {
        Interceptor.attach(addrGetCharField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetCharField] obj is " + this.obj + ", fid is " + this.fid + " and return is " + Memory.readCString(retval, 1));
            }
        });
    }

    if (addrGetShortField != undefined) {
        Interceptor.attach(addrGetShortField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetShortField] obj is " + this.obj + ", fid is " + this.fid + " and return is " + Memory.readShort(retval));
            }
        });
    }

    if (addrGetIntField != undefined) {
        Interceptor.attach(addrGetIntField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetIntField] obj is " + this.obj + ", fid is " + this.fid + " and return is " + Memory.readInt(retval));
            }
        });
    }


    if (addrGetLongField != undefined) {
        Interceptor.attach(addrGetLongField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetLongField] obj is " + this.obj + ", fid is " + this.fid + " and return is " + Memory.readLong(retval));
            }
        });
    }


    if (addrGetFloatField != undefined) {
        Interceptor.attach(addrGetFloatField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetFloatField] obj is " + this.obj + ", fid is " + this.fid + " and return is " + Memory.readFloat(retval));
            }
        });
    }


    if (addrGetDoubleField != undefined) {
        Interceptor.attach(addrGetDoubleField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetDoubleField] obj is " + this.obj + ", fid is " + this.fid + " and return is " + Memory.readDouble(retval));
            }
        });
    }


    if (addrGetStaticBooleanField != undefined) {
        Interceptor.attach(addrGetStaticBooleanField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetStaticBooleanField] obj is " + this.clazz + ", fid is " + this.fid + " and return is " + retval);
            }
        });
    }


    if (addrGetStaticByteField != undefined) {
        Interceptor.attach(addrGetStaticByteField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetStaticByteField] obj is " + this.clazz + ", fid is " + this.fid + " and return is " + Memory.readByteArray(retval, 1));
            }
        });
    }


    if (addrGetStaticCharField != undefined) {
        Interceptor.attach(addrGetStaticCharField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetStaticCharField] obj is " + this.clazz + ", fid is " + this.fid + " and return is " + Memory.readCString(retval, 1));
            }
        });
    }


    if (addrGetStaticShortField != undefined) {
        Interceptor.attach(addrGetStaticShortField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetStaticShortField] obj is " + this.clazz + ", fid is " + this.fid + " and return is " + Memory.readShort(retval));
            }
        });
    }


    if (addrGetStaticIntField != undefined) {
        Interceptor.attach(addrGetStaticIntField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetStaticIntField] obj is " + this.clazz + ", fid is " + this.fid + " and return is " + Memory.readInt(retval));
            }
        });
    }


    if (addrGetStaticLongField != undefined) {
        Interceptor.attach(addrGetStaticLongField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetStaticLongField] obj is " + this.clazz + ", fid is " + this.fid + " and return is " + Memory.readLong(retval));
            }
        });
    }


    if (addrGetStaticFloatField != undefined) {
        Interceptor.attach(addrGetStaticFloatField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetStaticFloatField] obj is " + this.clazz + ", fid is " + this.fid + " and return is " + Memory.readFloat(retval));
            }
        });
    }


    if (addrGetStaticDoubleField != undefined) {
        Interceptor.attach(addrGetStaticDoubleField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
            },
            onLeave: function (retval) {
                console.log("[GetStaticDoubleField] obj is " + this.clazz + ", fid is " + this.fid + " and return is " + Memory.readDouble(retval));
            }
        });
    }

    if (addrSetBooleanField != undefined) {
        Interceptor.attach(addrSetBooleanField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetBooleanField] obj is " + this.obj + ", fid is " + this.fid + " and value is " + this.v);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetByteField != undefined) {
        Interceptor.attach(addrSetByteField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetByteField] obj is " + this.obj + ", fid is " + this.fid + " and value is " + Memory.readByteArray(this.v, 1));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetCharField != undefined) {
        Interceptor.attach(addrSetCharField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetCharField] obj is " + this.obj + ", fid is " + this.fid + " and value is " + Memory.readCString(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetFloatField != undefined) {
        Interceptor.attach(addrSetFloatField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetFloatField] obj is " + this.obj + ", fid is " + this.fid + " and value is " + Memory.readFloat(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetDoubleField != undefined) {
        Interceptor.attach(addrSetDoubleField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetDoubleField] obj is " + this.obj + ", fid is " + this.fid + " and value is " + Memory.readDouble(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetIntField != undefined) {
        Interceptor.attach(addrSetIntField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetIntField] obj is " + this.obj + ", fid is " + this.fid + " and value is " + Memory.readInt(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetLongField != undefined) {
        Interceptor.attach(addrSetLongField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetLongField] obj is " + this.obj + ", fid is " + this.fid + " and value is " + Memory.readLong(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetShortField != undefined) {
        Interceptor.attach(addrSetShortField, {
            onEnter: function (args) {
                this.obj = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetShortField] obj is " + this.obj + ", fid is " + this.fid + " and value is " + Memory.readShort(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetStaticBooleanField != undefined) {
        Interceptor.attach(addrSetStaticBooleanField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetStaticBooleanField] obj is " + this.clazz + ", fid is " + this.fid + " and value is " + this.v);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetStaticByteField != undefined) {
        Interceptor.attach(addrSetStaticByteField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetStaticByteField] obj is " + this.clazz + ", fid is " + this.fid + " and value is " + Memory.readByteArray(this.v, 1));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetStaticCharField != undefined) {
        Interceptor.attach(addrSetStaticCharField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetStaticCharField] obj is " + this.clazz + ", fid is " + this.fid + " and value is " + Memory.readCString(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetStaticFloatField != undefined) {
        Interceptor.attach(addrSetStaticFloatField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetStaticFloatField] obj is " + this.clazz + ", fid is " + this.fid + " and value is " + Memory.readFloat(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetStaticDoubleField != undefined) {
        Interceptor.attach(addrSetStaticDoubleField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetStaticDoubleField] obj is " + this.clazz + ", fid is " + this.fid + " and value is " + Memory.readDouble(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetStaticIntField != undefined) {
        Interceptor.attach(addrSetStaticIntField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetStaticIntField] obj is " + this.clazz + ", fid is " + this.fid + " and value is " + Memory.readInt(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetStaticLongField != undefined) {
        Interceptor.attach(addrSetStaticLongField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetStaticLongField] obj is " + this.clazz + ", fid is " + this.fid + " and value is " + Memory.readLong(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetStaticShortField != undefined) {
        Interceptor.attach(addrSetStaticShortField, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.fid = args[2];
                this.v = args[3];
                console.log("[SetStaticShortField] obj is " + this.clazz + ", fid is " + this.fid + " and value is " + Memory.readShort(this.v));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrCallStaticObjectMethod != undefined) {
        Interceptor.attach(addrCallStaticObjectMethod, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.mid = args[2];
            },
            onLeave: function (retval) {
                console.log("[CallStaticObjectMethod] class is " + this.clazz + ", mid is " + mid + " and return is + " + retval);
            }
        });
    }


    if (addrCallStaticBooleanMethod != undefined) {
        Interceptor.attach(addrCallStaticBooleanMethod, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.mid = args[2];
            },
            onLeave: function (retval) {
                console.log("[CallStaticBooleanMethod] class is " + this.clazz + ", mid is " + mid + " and return is + " + retval);
            }
        });
    }


    if (addrCallStaticByteMethod != undefined) {
        Interceptor.attach(addrCallStaticByteMethod, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.mid = args[2];
            },
            onLeave: function (retval) {
                console.log("[CallStaticByteMethod] class is " + this.clazz + ", mid is " + mid + " and return is + " + Memory.readByteArray(retval, 1));
            }
        });
    }


    if (addrCallStaticCharMethod != undefined) {
        Interceptor.attach(addrCallStaticCharMethod, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.mid = args[2];
            },
            onLeave: function (retval) {
                console.log("[CallStaticCharMethod] class is " + this.clazz + ", mid is " + mid + " and return is + " + Memory.readCString(retval, 1));
            }
        });
    }


    if (addrCallStaticShortMethod != undefined) {
        Interceptor.attach(addrCallStaticShortMethod, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.mid = args[2];
            },
            onLeave: function (retval) {
                console.log("[CallStaticShortMethod] class is " + this.clazz + ", mid is " + mid + " and return is + " + Memory.readShort(retval));
            }
        });
    }

    if (addrCallStaticIntMethod != undefined) {
        Interceptor.attach(addrCallStaticIntMethod, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.mid = args[2];
            },
            onLeave: function (retval) {
                console.log("[CallStaticIntMethod] class is " + this.clazz + ", mid is " + mid + " and return is + " + Memory.readInt(retval));
            }
        });
    }


    if (addrCallStaticLongMethod != undefined) {
        Interceptor.attach(addrCallStaticLongMethod, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.mid = args[2];
            },
            onLeave: function (retval) {
                console.log("[CallStaticLongMethod] class is " + this.clazz + ", mid is " + mid + " and return is + " + Memory.readLong(retval));
            }
        });
    }


    if (addrCallStaticFloatMethod != undefined) {
        Interceptor.attach(addrCallStaticFloatMethod, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.mid = args[2];
            },
            onLeave: function (retval) {
                console.log("[CallStaticFloatMethod] class is " + this.clazz + ", mid is " + mid + " and return is + " + Memory.readFloat(retval));
            }
        });
    }


    if (addrCallStaticDoubleMethod != undefined) {
        Interceptor.attach(addrCallStaticDoubleMethod, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.mid = args[2];
            },
            onLeave: function (retval) {
                console.log("[CallStaticDoubleMethod] class is " + this.clazz + ", mid is " + mid + " and return is + " + Memory.readDouble(retval));
            }
        });
    }


    if (addrCallStaticVoidMethod != undefined) {
        Interceptor.attach(addrCallStaticVoidMethod, {
            onEnter: function (args) {
                this.clazz = args[1];
                this.mid = args[2];
            },
            onLeave: function (retval) {
                console.log("[CallStaticVoidMethod] class is " + this.clazz + ", mid is " + mid);
            }
        });
    }


    if (addrNewString != undefined) {
        Interceptor.attach(addrNewString, {
            onEnter: function (args) {
                console.log("[NewString] chars is " + Memory.readUtf8String(args[1]));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetStringLength != undefined) {
        Interceptor.attach(addrGetStringLength, {
            onEnter: function (args) {
                this.java_string = Memory.readCString(args[1]);
            },
            onLeave: function (retval) {
                console.log("[GetStringLength] chars is " + this.java_string + " and return is " + retval);
            }
        });
    }

    if (addrGetStringUTFLength != undefined) {
        Interceptor.attach(addrGetStringUTFLength, {
            onEnter: function (args) {
                this.java_string = Memory.readCString(args[1]);
            },
            onLeave: function (retval) {
                console.log("[GetStringUTFLength] chars is " + this.java_string + " and return is " + retval);
            }
        });
    }


    if (addrGetStringRegion != undefined) {
        Interceptor.attach(addrGetStringRegion, {
            onEnter: function (args) {
                console.log("[GetStringRegion] chars is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + ", and buf is " + Memory.readCString(args[4]));
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetStringUTFRegion != undefined) {
        Interceptor.attach(addrGetStringUTFRegion, {
            onEnter: function (args) {
                console.log("[GetStringUTFRegion] chars is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + ", and buf is " + Memory.readCString(args[4]));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetStringChars != undefined) {
        Interceptor.attach(addrGetStringChars, {
            onEnter: function (args) {
                console.log("[GetStringChars] java string is " + Memory.readUtf8String(args[1]) + " and is copy is " + args[2]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrReleaseStringChars != undefined) {
        Interceptor.attach(addrReleaseStringChars, {
            onEnter: function (args) {
                console.log("[ReleaseStringChars] java string is " + Memory.readUtf8String(args[1]));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrReleaseStringUTFChars != undefined) {
        Interceptor.attach(addrReleaseStringUTFChars, {
            onEnter: function (args) {
                console.log("[ReleaseStringUTFChars] java string is " + Memory.readUtf8String(args[1]));
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetArrayLength != undefined) {
        Interceptor.attach(addrGetArrayLength, {
            onEnter: function (args) {
                console.log("[GetArrayLength] java array is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetObjectArrayElement != undefined) {
        Interceptor.attach(addrGetObjectArrayElement, {
            onEnter: function (args) {
                console.log("[GetObjectArrayElement] java array is " + args[1] + " and size is " + args[2]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrSetObjectArrayElement != undefined) {
        Interceptor.attach(addrSetObjectArrayElement, {
            onEnter: function (args) {
                console.log("[SetObjectArrayElement] java array is " + args[1] + ", index is " + args[2] + " and value is " + args[3]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrNewBooleanArray != undefined) {
        Interceptor.attach(addrNewBooleanArray, {
            onEnter: function (args) {
                console.log("[NewBooleanArray] length is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrNewByteArray != undefined) {
        Interceptor.attach(addrNewByteArray, {
            onEnter: function (args) {
                console.log("[NewByteArray] length is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrNewCharArray != undefined) {
        Interceptor.attach(addrNewCharArray, {
            onEnter: function (args) {
                console.log("[NewCharArray] length is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrNewDoubleArray != undefined) {
        Interceptor.attach(addrNewDoubleArray, {
            onEnter: function (args) {
                console.log("[NewDoubleArray] length is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrNewFloatArray != undefined) {
        Interceptor.attach(addrNewFloatArray, {
            onEnter: function (args) {
                console.log("[NewFloatArray] length is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrNewIntArray != undefined) {
        Interceptor.attach(addrNewIntArray, {
            onEnter: function (args) {
                console.log("[NewIntArray] length is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrNewLongArray != undefined) {
        Interceptor.attach(addrNewLongArray, {
            onEnter: function (args) {
                console.log("[NewLongArray] length is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrNewObjectArray != undefined) {
        Interceptor.attach(addrNewObjectArray, {
            onEnter: function (args) {
                console.log("[NewObjectArray] length is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrNewShortArray != undefined) {
        Interceptor.attach(addrNewShortArray, {
            onEnter: function (args) {
                console.log("[NewShortArray] length is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetBooleanArrayElements != undefined) {
        Interceptor.attach(addrGetBooleanArrayElements, {
            onEnter: function (args) {
                console.log("[GetBooleanArrayElements] array is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetByteArrayElements != undefined) {
        Interceptor.attach(addrGetByteArrayElements, {
            onEnter: function (args) {
                console.log("[GetByteArrayElements] array is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetCharArrayElements != undefined) {
        Interceptor.attach(addrGetCharArrayElements, {
            onEnter: function (args) {
                console.log("[GetCharArrayElements] array is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetDoubleArrayElements != undefined) {
        Interceptor.attach(addrGetDoubleArrayElements, {
            onEnter: function (args) {
                console.log("[GetDoubleArrayElements] array is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetFloatArrayElements != undefined) {
        Interceptor.attach(addrGetFloatArrayElements, {
            onEnter: function (args) {
                console.log("[GetFloatArrayElements] array is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetIntArrayElements != undefined) {
        Interceptor.attach(addrGetIntArrayElements, {
            onEnter: function (args) {
                console.log("[GetIntArrayElements] array is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetLongArrayElements != undefined) {
        Interceptor.attach(addrGetLongArrayElements, {
            onEnter: function (args) {
                console.log("[GetLongArrayElements] array is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetShortArrayElements != undefined) {
        Interceptor.attach(addrGetShortArrayElements, {
            onEnter: function (args) {
                console.log("[GetShortArrayElements] array is " + args[1]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetBooleanArrayRegion != undefined) {
        Interceptor.attach(addrGetBooleanArrayRegion, {
            onEnter: function (args) {
                console.log("[GetBooleanArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetByteArrayRegion != undefined) {
        Interceptor.attach(addrGetByteArrayRegion, {
            onEnter: function (args) {
                console.log("[GetByteArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetCharArrayRegion != undefined) {
        Interceptor.attach(addrGetCharArrayRegion, {
            onEnter: function (args) {
                console.log("[GetCharArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetDoubleArrayRegion != undefined) {
        Interceptor.attach(addrGetDoubleArrayRegion, {
            onEnter: function (args) {
                console.log("[GetDoubleArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetFloatArrayRegion != undefined) {
        Interceptor.attach(addrGetFloatArrayRegion, {
            onEnter: function (args) {
                console.log("[GetFloatArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetIntArrayRegion != undefined) {
        Interceptor.attach(addrGetIntArrayRegion, {
            onEnter: function (args) {
                console.log("[GetIntArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetLongArrayRegion != undefined) {
        Interceptor.attach(addrGetLongArrayRegion, {
            onEnter: function (args) {
                console.log("[GetLongArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrGetShortArrayRegion != undefined) {
        Interceptor.attach(addrGetShortArrayRegion, {
            onEnter: function (args) {
                console.log("[GetShortArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrSetBooleanArrayRegion != undefined) {
        Interceptor.attach(addrSetBooleanArrayRegion, {
            onEnter: function (args) {
                console.log("[SetBooleanArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrSetByteArrayRegion != undefined) {
        Interceptor.attach(addrSetByteArrayRegion, {
            onEnter: function (args) {
                console.log("[SetByteArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrSetCharArrayRegion != undefined) {
        Interceptor.attach(addrSetCharArrayRegion, {
            onEnter: function (args) {
                console.log("[SetCharArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrSetDoubleArrayRegion != undefined) {
        Interceptor.attach(addrSetDoubleArrayRegion, {
            onEnter: function (args) {
                console.log("[SetDoubleArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrSetFloatArrayRegion != undefined) {
        Interceptor.attach(addrSetFloatArrayRegion, {
            onEnter: function (args) {
                console.log("[SetFloatArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrSetIntArrayRegion != undefined) {
        Interceptor.attach(addrSetIntArrayRegion, {
            onEnter: function (args) {
                console.log("[SetIntArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrSetLongArrayRegion != undefined) {
        Interceptor.attach(addrSetLongArrayRegion, {
            onEnter: function (args) {
                console.log("[SetLongArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrSetShortArrayRegion != undefined) {
        Interceptor.attach(addrSetShortArrayRegion, {
            onEnter: function (args) {
                console.log("[SetShortArrayRegion] array is " + args[1] + ", start is " + args[2] + ", length is " + args[3] + " and buf is " + args[4]);
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrMonitorEnter != undefined) {
        Interceptor.attach(addrMonitorEnter, {
            onEnter: function (args) {
                console.log("[MonitorEnter] is called!");
            },
            onLeave: function (retval) {
            }
        });
    }

    if (addrMonitorExit != undefined) {
        Interceptor.attach(addrMonitorExit, {
            onEnter: function (args) {
                console.log("[MonitorExit] is called!");
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetJavaVM != undefined) {
        Interceptor.attach(addrGetJavaVM, {
            onEnter: function (args) {
                console.log("[GetJavaVM] is called!");
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrNewDirectByteBuffer != undefined) {
        Interceptor.attach(addrNewDirectByteBuffer, {
            onEnter: function (args) {
                console.log("[NewDirectByteBuffer] is called!");
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetDirectBufferAddress != undefined) {
        Interceptor.attach(addrGetDirectBufferAddress, {
            onEnter: function (args) {
                console.log("[GetDirectBufferAddress] is called!");
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetDirectBufferCapacity != undefined) {
        Interceptor.attach(addrGetDirectBufferCapacity, {
            onEnter: function (args) {
                console.log("[GetDirectBufferCapacity] is called!");
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrGetObjectRefType != undefined) {
        Interceptor.attach(addrGetObjectRefType, {
            onEnter: function (args) {
                console.log("[GetObjectRefType] is called!");
            },
            onLeave: function (retval) {
            }
        });
    }


    if (addrEnsureLocalCapacityInternal != undefined) {
        Interceptor.attach(addrEnsureLocalCapacityInternal, {
            onEnter: function (args) {
                console.log("[EnsureLocalCapacityInternal] is called!");
            },
            onLeave: function (retval) {
            }
        });
    }



    //#2267
    // if (addr != undefined) {
    //     Interceptor.attach(addr, {
    //         onEnter: function (args) {
    //         },
    //         onLeave: function (retval) {
    //         }
    //     });
    // }
}

setImmediate(hook);