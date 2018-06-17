/**
 * hook write
 * search dex magic word
 * dump dex
 */
function hook_write(){
    var read_buf_len = 7;
    var file_name_partial = "/sdcard/hook_write_dex_";
    var dex_file_magic = "dex\n035";
    Interceptor.attach(Module.findExportByName("libc.so" , "write"), {
        //write(FILE *fd, buf, len(buf))
        onEnter: function(args) {
            send("write("+args[0]+", "+Memory.readCString(args[1], read_buf_len)+", "+args[2]+")");
            if(Memory.readCString(args[1], read_buf_len) == dex_file_magic){
                var filename = get_dex_file_name(file_name_partial);
                var outFile = new File(filename, "w");
                var buf = Memory.readByteArray(args[1], parseInt(args[2]));
                outFile.write(buf);
                outFile.flush();
                outFile.close();
                send("write finished!!!");
            }},
        onLeave:function(retval){
        }
    });
}

/**
 * hook memcmp
 * search dex magic word
 * dump dex
 */
function hook_memcmp() {
    var read_buf_len = 7;
    var file_name_partial = "/sdcard/hook_memcmp_dex_";
    var dex_file_magic = "dex\n035";
    Interceptor.attach(Module.findExportByName("libc.so" , "memcmp"), {
        onEnter: function(args) {
            send("show args1 is: "+Memory.readCString(args[0], parseInt(args[2]))+" and args2 is: "+Memory.readCString(args[1], parseInt(args[2]))+" and length is: "+args[2]);
            if(Memory.readCString(args[0],read_buf_len) == dex_file_magic){
                var filename = get_dex_file_name(file_name_partial);
                var outFile = new File(filename, "w");
                var buf = Memory.readByteArray(args[0], parseInt(args[2]));
                outFile.write(buf);
                outFile.flush();
                outFile.close();
                send("memcmp hooked ");
            }
            if(Memory.readCString(args[1],read_buf_len) == dex_file_magic){
                var filename = get_dex_file_name(file_name_partial);
                var outFile = new File(filename, "w");
                var buf = Memory.readByteArray(args[1], parseInt(args[2]));
                outFile.write(buf);
                outFile.flush();
                outFile.close();
                send("memcmp hooked ");
            }
        },
        onLeave:function(retval){
        }
    });
}

/**
 * 360
 */
function hook_memcpy() {
    var read_buf_len = 7;
    var file_name_partial = "/sdcard/hook_memcpy_dex_";
    var dex_file_magic = "dex\n035";
    //void *memcpy(void *dest, const void *src, size_t n);
    Interceptor.attach(Module.findExportByName("libc.so" , "memcpy"), {
        onEnter: function (args) {
            this.dest = args[0];
            this.src = args[1];
            this.size = args[2].toInt32();
        },
        onLeave: function (retval) {
            if(Memory.readCString(this.dest, read_buf_len) == dex_file_magic){
                send("hook memcpy("+Memory.readCString(this.dest, read_buf_len)+", "+Memory.readCString(this.src, read_buf_len)+", "+this.size+")");
                var filename = get_dex_file_name(file_name_partial);
                var buf = Memory.readByteArray(this.dest, this.size);
                var outFile = new File(filename, "wb+");
                outFile.write(buf);
                outFile.flush();
                outFile.close();
                send("hook memcpy finished!!!");
            }
        }
    });
}

function hook_open() {
    Interceptor.attach(Module.findExportByName("libc.so" , "open"), {
        onEnter: function (args) {
            send("hook open("+Memory.readCString(args[0])+", "+args[1].toInt32()+")");
        },
        onLeave: function (retval) {

        }
    });
}

function hook_fopen() {
    Interceptor.attach(Module.findExportByName("libc.so" , "fopen"), {
        onEnter: function (args) {
            send("hook fopen("+Memory.readCString(args[0])+", "+Memory.readCString(args[1])+")");
        },
        onLeave: function (retval) {

        }
    });
}

function hook_mmap() {
    Interceptor.attach(Module.findExportByName("libc.so" , "mmap"), {
        onEnter: function (args) {
            send("hook mmap("+args[0]+", "+args[1]+", "+args[2]+", "+args[3]+", "+args[4]+", "+args[5]+")");
        },
        onLeave: function (retval) {
            send("mmap result is: "+Memory.readCString(retval, 5));
        }
    });
}

function hook_munmap() {
    Interceptor.attach(Module.findExportByName("libc.so" , "mmap"), {
        onEnter: function (args) {
            send("hook munmap("+args[0]+", "+args[1]+")");
        },
        onLeave: function (retval) {
        }
    });
}

function hook_snprintf() {
    Interceptor.attach(Module.findExportByName("libc.so" , "snprintf"), {
        onEnter: function (args) {
            this.str = args[0];

        },
        onLeave: function (retval) {
            send("hook snprintf str is: "+Memory.readCString(this.str));
        }
    });
}


function hook_openMemory() {
    var read_buf_len = 7;
    var file_name_partial = "/data/data/com.me.hookme/hook_openMemory_dex_";
    var dex_file_magic = "dex\n035";
    // const DexFile* DexFile::OpenMemory(const byte* base, size_t size, const std::string& location, uint32_t location_checksum, MemMap* mem_map, std::string* error_msg)
    Interceptor.attach(Module.findExportByName("libart.so", "_ZN3art7DexFile10OpenMemoryEPKhjRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEjPNS_6MemMapES2_PS9_"), {
        onEnter: function(args) {
            if(Memory.readCString(args[0], read_buf_len) == dex_file_magic){
                var filename = get_dex_file_name(file_name_partial);
                var outFile = new File(filename, "w");
                var buf = Memory.readByteArray(args[0], args[1].toInt32());
                outFile.write(buf);
                outFile.flush();
                outFile.close();
                send("hook openMemory finished!!!");
            }
        },
        onLeave: function(retval){
        }
    });
}

function hook_defineClass() {
    //_ZN3art11ClassLinker11DefineClassEPKcNS_6HandleINS_6mirror11ClassLoaderEEERKNS_7DexFileERKNS7_8ClassDefE
    //mirror::Class* ClassLinker::DefineClass(const char* descriptor, Handle<mirror::ClassLoader> class_loader, const DexFile& dex_file, const DexFile::ClassDef& dex_class_def)
    //DefineClass(descriptor.c_str(), class_loader, *dex_file,*dex_class_def);
    Interceptor.attach(Module.findExportByName("libart.so" , "_ZN3art11ClassLinker11DefineClassEPKcNS_6HandleINS_6mirror11ClassLoaderEEERKNS_7DexFileERKNS7_8ClassDefE"), {
        onEnter: function (args) {
            send("args[2] is: "+Memory.readCString(args[2], 7));
        },
        onLeave: function (retval) {
        }
    });
}

function hook_dlopen() {
    Interceptor.attach(Module.findExportByName("libc.so" , "dlopen"), {
        onEnter: function (args) {
            send("hook dlopen("+Memory.readCString(args[0]) +", "+ args[1]+")");
        },
        onLeave: function (retval) {
            send("hook dlopen result: "+retval);
        }
    });
}

function hook_dlsym() {
    Interceptor.attach(Module.findExportByName("libc.so" , "dlsym"), {
        onEnter: function (args) {
            send("hook dlsym("+args[0] +", "+ Memory.readCString(args[1])+")");
        },
        onLeave: function (retval){
            send("hook dlsym result: "+retval);
        }
    });
}

function hook_registerNativeMethods() {
    
        Interceptor.attach(Module.findExportByName("libart.so" , "_ZN3art21RegisterNativeMethodsEP7_JNIEnvPKcPK15JNINativeMethodi"), {
        onEnter: function (args){

        },
        onLeave: function (retval){

        }
    });
}

function get_dex_file_name(file_name_partial) {
    var date = new Date();
    var time = date.getTime();
    var file_name = file_name_partial + time + ".dex";
    return file_name;
}


setTimeout(hook_openMemory(),0);