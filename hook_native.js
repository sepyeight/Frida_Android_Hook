// frida -U -f com.ford.oa.ap -l hook_native.js --no-pause
function hook_native() {
    var opendir_addr = Module.findExportByName(null, 'opendir');
    Interceptor.attach(opendir_addr, {
        onEnter: function (args) {
            console.log('Native opendir(' + Memory.readCString(args[0]) + ')');
        },
        onLeave: function (retval) {
            var path = Memory.readCString(this.path);
            console.log('Native opendir(' + path + '), ret->' + retval);
        }
    });

    //struct dirent {
    //                ino_t          d_ino;       /* Inode number */
    //                off_t          d_off;       /* Not an offset; see below */
    //                unsigned short d_reclen;    /* Length of this record */
    //                unsigned char  d_type;      /* Type of file; not supported
    //                                               by all filesystem types */
    //                char           d_name[256]; /* Null-terminated filename */
    //            };
    // struct dirent *readdir(DIR *dirp);
    var readdir_addr = Module.findExportByName(null, 'readdir');
    Interceptor.attach(readdir_addr, {
        onEnter: function (args) {
            this.dirp = args[0];
        },
        onLeave: function (retval) {
            var dirp = this.dirp;
            //dump_memory(dirp);
            // Memory.protect(ptr(retval.add(19)), 30, 'rw-');
            if (dirp != null) {
                console.log('Native readdir(' + dirp + '), ret->' + Memory.readCString(ptr(retval.add(19))));
            }
        }
    });

    // int strcasecmp(const char *s1, const char *s2);
    var strcasecmp_addr = Module.findExportByName(null, 'strcasecmp');
    Interceptor.attach(strcasecmp_addr, {
        onEnter: function (args) {
            this.s1 = Memory.readCString(args[0]);
            this.s2 = Memory.readCString(args[1]);
        },
        onLeave: function (retval) {
            var s1 = this.s1;
            var s2 = this.s2;
            console.log('Native strcasecmp(' + s1 + ', ' + s2 + '), ret->' + retval.toInt32());
        }
    });

    // int strncasecmp(const char *s1, const char *s2, size_t n);
    var strncasecmp_addr = Module.findExportByName(null, 'strncasecmp');
    Interceptor.attach(strncasecmp_addr, {
        onEnter: function (args) {
            this.s1 = Memory.readCString(args[0]);
            this.s2 = Memory.readCString(args[1]);
            this.n = args[2];
        },
        onLeave: function (retval) {
            var s1 = this.s1;
            var s2 = this.s2;
            var n = this.n;
            console.log('Native strncasecmp(' + s1 + ', ' + s2 + ', ' + n.toInt32() + '), ret->' + retval);
        }
    });

    // unsigned int sleep(unsigned int seconds);
    var sleep_addr = Module.findExportByName(null, 'sleep');
    Interceptor.attach(sleep_addr, {
        onEnter: function (args) {
            this.seconds = args[0].toInt32();
        },
        onLeave: function (retval) {
            var seconds = this.seconds;
            console.log('Native sleep(' + seconds + '), ret->' + retval.toInt32());
        }
    });

    // int kill(pid_t pid, int sig);
    var kill_addr = Module.findExportByName(null, 'kill');
    Interceptor.attach(kill_addr, {
        onEnter: function (args) {
            this.pid = args[0].toInt32();
            this.sig = args[1].toInt32();
        },
        onLeave: function (retval) {
            var pid = this.pid;
            var sig = this.sig;
            console.log('Native kill(' + pid + ', ' + sig + '), ret->' + retval.toInt32());
        }
    });

    // int readdir_r(DIR *dirp, struct dirent *entry, struct dirent **result);
    var readdir_r_addr = Module.findExportByName(null, 'readdir_r');
    Interceptor.attach(readdir_r_addr, {
        onEnter: function (args) {
            this.dirp = args[0];
            this.entry = args[1];
            this.result = args[2];
        },
        onLeave: function (retval) {
            //dump_memory(this.entry);
            var dirp = this.dirp;
            var entry = this.entry;
            var result = this.result;
            console.log('Native readdir_r(' + dirp + ', ' + Memory.readCString(entry.add(19)) + ', ' + result + '), ret->' + retval);
        }
    });

    // char *strstr(const char *haystack, const char *needle)
    var strstr_addr = Module.findExportByName(null, 'strstr');
    Interceptor.attach(strstr_addr, {
        onEnter: function (args) {
            this.haystack = Memory.readCString(args[0]);
            this.needle = Memory.readCString(args[1]);
        },
        onLeave: function (retval) {
            var haystack = this.haystack;
            var needle = this.needle;
            var ret = Memory.readCString(retval);
            console.log('Native strstr(' + haystack + ', ' + needle + '), ret->' + ret);
        }
    });

    // char *strcasestr(const char *haystack, const char *needle);
    var strcasestr_addr = Module.findExportByName(null, 'strcasestr');
    Interceptor.attach(strcasestr_addr, {
        onEnter: function (args) {
            this.haystack = Memory.readCString(args[0]);
            this.needle = Memory.readCString(args[1]);
        },
        onLeave: function (retval) {
            var haystack = this.haystack;
            var needle = this.needle;
            var ret = Memory.readCString(retval);
            console.log('Native strcasestr(' + haystack + ', ' + needle + '), ret->' + ret);
        }
    });

    // int vsprintf (char * s, const char * format, va_list arg );
    var vsprintf_addr = Module.findExportByName(null, 'vsprintf');
    Interceptor.attach(vsprintf_addr, {
        onEnter: function (args) {
            this.s = Memory.readCString(args[0]);
            this.format = Memory.readCString(args[1]);
            this.arg = args[2];
        },
        onLeave: function (retval) {
            var s = this.s;
            var format = this.format;
            var arg = this.arg;
            console.log('Native vsprintf(' + s + ', ' + format + ', ' + arg + '), ret->' + retval);
        }
    });


    // int open(const char *pathname, int flags);
    var open_addr = Module.findExportByName(null, 'open');
    Interceptor.attach(open_addr, {
        onEnter: function (args) {
            // console.log('Native open(' + Memory.readCString(args[0]) + '， ' + args[1] + ')');
            this.pathname = args[0];
            this.flags = args[1];
        },
        onLeave: function (retval) {
            var pathname = Memory.readCString(this.pathname);
            var flags = this.flags;
            console.log('Native open(' + pathname + '， ' + flags + '), ret->' + retval);
        }
    });

    // int openat64(int fd, const char * path, int oflag, ...);
    var openat64_addr = Module.findExportByName(null, 'openat64');
    Interceptor.attach(openat64_addr, {
        onEnter: function (args) {
            this.fd = args[0];
            this.path = Memory.readCString(ptr(args[1]));
            this.oflag = args[2];
        },
        onLeave: function (retval) {
            var fd = this.fd;
            var path = this.path;
            var oflag = this.oflag;
            console.log('Native openat64(' + fd + ', ' + path + ', ' + oflag + '), ret->' + retval);
        }
    });

    // int openat(int dirfd, const char *pathname, int flags);
    var openat_addr = Module.findExportByName(null, 'openat');
    Interceptor.attach(openat_addr, {
        onEnter: function (args) {
            this.dirfd = args[0];
            this.pathname = Memory.readCString(args[1]);
            this.flags = args[2];
        },
        onLeave: function (retval) {
            var dirfd = this.dirfd;
            var pathname = this.pathname;
            var flags = this.flags;
            console.log('Native openat(' + dirfd + ', ' + pathname + ', ' + flags + '), ret->' + retval);
        }
    });

    // off_t lseek(int fd, off_t offset, int whence);
    var lseek_addr = Module.findExportByName(null, 'lseek');
    Interceptor.attach(lseek_addr, {
        onEnter: function (args) {
            this.fd = args[0];
            this.offset = args[1];
            this.whence = args[2];
        },
        onLeave: function (retval) {
            var fd = this.fd;
            var offset = this.offset;
            var whence = this.whence;
            console.log('Native lseek(' + fd + ', ' + offset + ', ' + whence + '), ret->' + retval);
        }
    });

    // off64_t lseek64(int fd, off64_t offset, int whence);
    var lseek64_addr = Module.findExportByName(null, 'lseek64');
    Interceptor.attach(lseek64_addr, {
        onEnter: function (args) {
            this.fd = args[0];
            this.offset = args[1];
            this.whence = args[2];
        },
        onLeave: function (retval) {
            var fd = this.fd;
            var offset = this.offset;
            var whence = this.whence;
            console.log('Native lseek64(' + fd + ', ' + offset + ', ' + whence + '), ret->' + retval);
        }
    });

    // int ftruncate(int fildes, off_t length);
    var ftruncate_addr = Module.findExportByName(null, 'ftruncate');
    Interceptor.attach(ftruncate_addr, {
        onEnter: function (args) {
            this.fildes = args[0];
            this.length = args[1];
        },
        onLeave: function (retval) {
            var fildes = this.fildes;
            var length = this.length;
            console.log('Native ftruncate(' + fildes + ', ' + length + '), ret->' + retval);
        }
    });


    // int creat(const char *path, mode_t mode);
    var create_addr = Module.findExportByName(null, 'create');
    if (create_addr) {
        Interceptor.attach(create_addr, {
            onEnter: function (args) {
                this.path = Memory.readCString(args[0]);
                this.mode = args[1];
            },
            onLeave: function (retval) {
                var path = this.path;
                var mode = this.mode;
                console.log('Native create(' + path + ', ' + mode + '), ret->' + retval);
            }
        });
    }

    // char *strrchr(const char *str, int c)
    var strrchr_addr = Module.findExportByName(null, 'strrchr');
    Interceptor.attach(strrchr_addr, {
        onEnter: function (args) {
            this.str = Memory.readCString(args[0]);
            this.c = args[1];
        },
        onLeave: function (retval) {
            var str = this.str;
            var c = this.c;
            var ret = Memory.readCString(retval);
            console.log('Native strrchr(' + str + ', ' + c + ', ' + ret + '), ret->' + retval);
        }
    });

    // int mkdirat(int dirfd, const char *pathname, mode_t mode);
    var mkdirat_addr = Module.findExportByName(null, 'mkdirat');
    Interceptor.attach(mkdirat_addr, {
        onEnter: function (args) {
            this.dirfd = args[0];
            this.pathname = args[1];
            this.mode = args[2];
        },
        onLeave: function (retval) {
            var dirfd = this.dirfd;
            var pathname = this.pathname;
            var mode = this.mode;
            console.log('Native mkdirat(' + dirfd + ', ' + pathname + ', ' + mode + '), ret->' + retval);
        }
    });

    var fdopendir_addr = Module.findExportByName(null, 'fdopendir');
    Interceptor.attach(fdopendir_addr, {
        onEnter: function (args) {
            this.arg = args[0];
        },
        onLeave: function (retval) {
            var arg = this.arg;
            console.log('Native fdopendir_addr(' + arg + '), ret->' + retval);
        }
    });

    var access_addr = Module.findExportByName(null, 'access');
    Interceptor.attach(access_addr, {
        onEnter: function (args) {
            if (Memory.readCString(args[0]).endsWith("su")) {
                Memory.writeUtf8String(args[0], Memory.readCString(args[0]) + "c");
            }
            this.path = args[0];
            this.flag = args[1];
        },
        onLeave: function (retval) {
            var path = Memory.readCString(this.path);
            var flag = this.flag;
            console.log('Native access(' + path + '， ' + flag + '), ret->' + retval);
        }
    });

    var fopen_addr = Module.findExportByName(null, 'fopen');
    Interceptor.attach(fopen_addr, {
        onEnter: function (args) {
            this.path = Memory.readCString(ptr(args[0]));
            this.flag = args[1];
        },
        onLeave: function (retval) {
            var path = this.path;
            var flag = this.flag;
            console.log('Native fopen(' + path + '， ' + flag + '), ret->' + retval);
        }
    });


    // int strcmp(const char *s1, const char *s2);
    var strcmp_addr = Module.findExportByName(null, 'strcmp');
    Interceptor.attach(strcmp_addr, {
        onEnter: function (args) {
            this.str0 = Memory.readCString(args[0]);
            this.str1 = Memory.readCString(args[1]);
            if (this.str0 == 'TracerPid') {
                Memory.writeUtf8String(args[0], "TracerPd");
            }

        },
        onLeave: function (retval) {
            var str0 = this.str0;
            var str1 = this.str1;
            console.log('Native strcmp(' + str0 + '， ' + str1 + '), ret->' + retval);
        }
    });

    // const char * strchr ( const char * str, int character );
    var strchr_addr = Module.findExportByName(null, 'strchr');
    Interceptor.attach(strchr_addr, {
        onEnter: function (args) {
            this.str = Memory.readCString(args[0]);
            this.character = args[1].toInt32();
        },
        onLeave: function (retval) {
            var str = this.str;
            var character = this.character;
            console.log('Native strchr(' + str + ', ' + character + '), ret->' + retval);
        }
    });

    // long int strtol(const char *nptr, char **endptr, int base);
    var strtol_addr = Module.findExportByName(null, 'strtol');
    Interceptor.attach(strtol_addr, {
        onEnter: function (args) {
            this.nptr = Memory.readCString(args[0]);
            this.endptr = args[1];
            this.base = args[2].toInt32();
        },
        onLeave: function (retval) {
            var nptr = this.nptr;
            var endptr = this.endptr;
            var base = this.base;
            console.log('Native strtol(' + nptr + ', ' + endptr + ', ' + base + '), ret->' + retval.toInt32());
        }
    });

    // long long int strtoll(const char *nptr, char **endptr, int base);
    var strtoll_addr = Module.findExportByName(null, 'strtoll');
    Interceptor.attach(strtoll_addr, {
        onEnter: function (args) {
            this.nptr = Memory.readCString(args[0]);
            this.endptr = args[1];
            this.base = args[2].toInt32();
        },
        onLeave: function (retval) {
            var nptr = this.nptr;
            var endptr = this.endptr;
            var base = this.base;
            console.log('Native strtoll(' + nptr + ', ' + endptr + ', ' + base + '), ret->' + retval.toInt32());
        }
    });

    // int islower(int c);
    var islower_addr = Module.findExportByName(null, 'islower');
    Interceptor.attach(islower_addr, {
        onEnter: function (args) {
            this.c = args[0].toInt32();
        },
        onLeave: function (retval) {
            var c = this.c;
            console.log('Nativa islower(' + c + '), ret->' + retval.toInt32());
        }
    });

    // char* getenv(const char* name)
    var getenv_addr = Module.findExportByName(null, 'getenv');
    Interceptor.attach(getenv_addr, {
        onEnter: function (args) {
            this.name = Memory.readCString(args[0]);
        },
        onLeave: function (retval) {
            var name = this.name;
            console.log('Native getenv(' + name + '), ret->' + retval);
        }
    });

    // int strncmp ( const char * str1, const char * str2, size_t num );
    var strncmp_addr = Module.findExportByName(null, 'strncmp');
    // Interceptor.attach(strncmp_addr, {
    //     onEnter: function (args) {
    //         this.str0 = args[0];
    //         this.str1 = args[1];
    //         this.num = args[2];
    //     },
    //     onLeave: function (retval) {
    //         var num = this.num;
    //         var str0 = Memory.readCString(this.str0, num);
    //         var str1 = Memory.readCString(this.str1, num);
    //         console.log('Native strncmp(' + str0 + '， ' + str1 + ', ' + num + '), ret->' + retval);
    //     }
    // });

    // int stat(const char *file_name, struct stat *buf);
    var stat_addr = Module.findExportByName(null, 'stat');
    Interceptor.attach(stat_addr, {
        onEnter: function (args) {
            this.file_name = Memory.readCString(ptr(args[0]));
            this.buf = args[1];
        },
        onLeave: function (retval) {
            var file_name = this.file_name;
            var buf = this.buf;
            console.log('Native stat(' + file_name + '， ' + buf + '), ret->' + retval);
        }
    });

    // int lstat(const char *path, struct stat *buf);
    var lstat_addr = Module.findExportByName(null, 'lstat');
    Interceptor.attach(lstat_addr, {
        onEnter: function (args) {
            this.file_name = Memory.readCString(ptr(args[0]));
            this.buf = args[1];
        },
        onLeave: function (retval) {
            var file_name = this.file_name;
            var buf = this.buf;
            console.log('Native lstat(' + file_name + '， ' + buf + '), ret->' + retval);
        }
    });


    // int fstat(int fd, struct stat *buf);
    var fstat_addr = Module.findExportByName(null, 'fstat');
    Interceptor.attach(fstat_addr, {
        onEnter: function (args) {
            this.fd = args[0];
            this.buf = args[1];
        },
        onLeave: function (retval) {
            var fd = this.fd;
            var buf = this.buf;
            console.log('Native lstat(' + fd + '， ' + buf + '), ret->' + retval);
        }
    });

    // const void * memchr ( const void * ptr, int value, size_t num );
    var memchr_addr = Module.findExportByName(null, 'memchr');
    Interceptor.attach(memchr_addr, {
        onEnter: function (args) {
            this.ptr = args[0];
            this.value = args[1];
            this.num = args[2];
        },
        onLeave: function (retval) {
            var ptr = Memory.readCString(this.ptr);
            var value = Memory.readCString(this.value);
            var num = this.num;
            console.log('Native memchr(' + ptr + ', ' + value + ', ' + num + '),ret->' + retval);
        }
    });

    //  int memcmp(const void *s1, const void *s2, size_t n);
    var memcmp_addr = Module.findExportByName(null, 'memcmp');
    Interceptor.attach(memcmp_addr, {
        onEnter: function (args) {
            this.s1 = args[0];
            this.s2 = args[1];
            this.n = args[2].toInt32();
        },
        onLeave: function (retval) {
            var s1 = this.s1;
            var s2 = this.s2;
            var n = this.n;
            console.log('Native memcmp(' + s1 + ', ' + s2 + ', ' + n + '), ret->' + retval);
        }

    });

    // void *memcpy(void *dest, const void *src, size_t n);
    var memcpy_addr = Module.findExportByName(null, 'memcpy');
    Interceptor.attach(memcpy_addr, {
        onEnter: function (args) {
            this.dest = args[0];
            this.src = args[1];
            this.n = args[2].toInt32();
        },
        onLeave: function (retval) {
            var dest = this.dest;
            var src = this.src;
            var n = this.n;
            console.log('Native memcpy(' + dest + ', ' + src + ', ' + n + ', ret->' + retval);
        }
    });

    var strlen_addr = Module.findExportByName(null, 'strlen');
    Interceptor.attach(strlen_addr, {
        onEnter: function (args) {
            this.str = Memory.readCString(ptr(args[0]));
        },
        onLeave: function (retval) {
            var str = this.str;
            console.log('Native strlen(' + str + '), ret->' + str);
        }
    });

    // FILE * popen(const char *command , const char *type );
    var popen_addr = Module.findExportByName(null, 'popen');
    Interceptor.attach(popen_addr, {
        onEnter: function (args) {
            this.command = Memory.readCString(ptr(args[0]));
            this.type = Memory.readCString(ptr(args[1]));
        },
        onLeave: function (retval) {
            var command = this.command;
            var type = this.type;
            console.log('Native popen(' + command + ', ' + type + '), ret->' + retval);
        }
    });

    // int atoi (const char * str);
    var atoi_addr = Module.findExportByName(null, 'atoi');
    Interceptor.attach(atoi_addr, {
        onEnter: function (args) {
            this.str = Memory.readCString(args[0]);
        },
        onLeave: function (retval) {
            var str = this.str;
            console.log('Native atoi(' + str + '), ret->' + retval);
        }
    });

    // int regcomp(regex_t *restrict preg, const char *restrict pattern, int cflags);
    var regcomp_addr = Module.findExportByName(null, 'regcomp');
    Interceptor.attach(regcomp_addr, {
        onEnter: function (args) {
            this.preg = args[0];
            this.pattern = Memory.readCString(args[1]);
            this.cflags = args[2];
        },
        onLeave: function (retval) {
            var preg = this.preg;
            var pattern = this.pattern;
            var cflags = this.cflags;
            console.log('Native regcomp(' + preg + ', ' + pattern + ', ' + cflags + '), ret->' + retval);
        }
    });

    // size_t regerror(int errcode, const regex_t *restrict preg, char *restrict errbuf, size_t errbuf_size);
    // void regfree(regex_t *preg);
    // int regexec(const regex_t *restrict preg, const char *restrict string, size_t nmatch, regmatch_t pmatch[restrict], int eflags);
    var regexec_addr = Module.findExportByName(null, 'regexec');
    Interceptor.attach(regexec_addr, {
        onEnter: function (args) {
            this.preg = args[0];
            this.string = Memory.readCString(args[1]);
            this.nmatch = args[2];
            this.pmatch = args[3];
            this.eflags = args[4];
        },
        onLeave: function (retval) {
            var preg = this.preg;
            var string = this.string;
            var nmatch = this.nmatch;
            var pmatch = this.pmatch;
            var eflags = this.eflags;
            console.log('Native regexec(' + preg + ', ' + string + ', ' + nmatch + ', ' + pmatch + ', ' + eflags + '), retval->' + retval);
        }
    });

    // void * memset ( void * ptr, int value, size_t num );
    var memset_addr = Module.findExportByName(null, 'memset');
    Interceptor.attach(memset_addr, {
        onEnter: function (args) {
            this.ptr = args[0];
            this.value = args[1];
            this.num = args[2];
        },
        onLeave: function (retval) {
            var ptr = this.ptr;
            var value = this.value;
            var num = this.num;
            console.log('Native memset(' + ptr + ', ' + value + ',' + num + '), ret->' + retval);
        }
    });


    // char *fgets(char *str, int n, FILE *stream)
    var fgets_addr = Module.findExportByName(null, 'fgets');
    Interceptor.attach(fgets_addr, {
        onEnter: function (args) {
            this.str = Memory.readCString(ptr(args[0]));
            this.n = args[1];
            this.stream = args[2];

        },
        onLeave: function (retval) {
            console.log('Native fgets(' + this.str + ', ' + this.n + ', ' + this.stream + '), ret->' + retval);
        }
    });

    // int sprintf( char *buffer, const char *format [, argument] ... );
    var sprintf_addr = Module.findExportByName(null, 'sprintf');
    Interceptor.attach(sprintf_addr, {
        onEnter: function (args) {
            this.buffer = ptr(args[0]);
            this.format = ptr(args[1]);

        },
        onLeave: function (retval) {
            var buffer = Memory.readCString(this.buffer);
            var format = Memory.readCString(this.format);
            console.log('Native sprintf(' + buffer + ', ' + format + '), ret->' + retval);
        }
    });

    // int snprintf ( char * s, size_t n, const char * format, ... );
    var snprintf_add = Module.findExportByName(null, 'snprintf');
    Interceptor.attach(snprintf_add, {
        onEnter: function (args) {
            this.buffer = ptr(args[0]);
            this.size = args[1];
            this.format = ptr(args[2]);

        },
        onLeave: function (retval) {
            var buffer = Memory.readCString(this.buffer);
            var size = this.size;
            var format = Memory.readCString(this.format);
            if (size > 5) {
                console.log('Native snprintf(' + buffer + ', ' + size + ',' + format + '), ret->' + retval);
            }
        }
    });

    // int fputs ( const char * str, FILE * stream );
    var fputs_addr = Module.findExportByName(null, 'fputs');
    Interceptor.attach(fputs_addr, {
        onEnter: function (args) {
            this.str = Memory.readCString(ptr(args[0]));
            this.stream = args[1];

        },
        onLeave: function (retval) {
            var str = this.str;
            var stream = this.stream;
            console.log('Native fputs(' + str + ', ' + stream + '), ret->' + retval);
        }
    });

    // int fprintf(FILE *stream, const char *format, ...)
    var fprintf_addr = Module.findExportByName(null, 'fprintf');
    Interceptor.attach(fprintf_addr, {
        onEnter: function (args) {
            this.stream = args[0];
            this.format = Memory.readCString(ptr(args[1]));

        },
        onLeave: function (retval) {
            var str = this.format;
            var stream = this.stream;
            console.log('Native fprintf(' + stream + ', ' + str + '), ret->' + retval);

        }
    });

    // size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream);
    var fread_addr = Module.findExportByName(null, 'fread');
    Interceptor.attach(fread_addr, {
        onEnter: function (args) {
            this.ptr = ptr(args[0]);
            this.size = args[1];
            this.nmemb = args[2];
            this.stream = args[3];

        },
        onLeave: function (retval) {
            var ptr = Memory.readCString(this.ptr);
            var size = this.size;
            var nmemb = this.nmemb;
            var stream = this.stream;
            console.log('Native fread(' + ptr + ', ' + size + ', ' + nmemb + ', ' + stream + '), ret->' + retval);

        }
    });

    // ssize_t read(int fd, void * buf, size_t count);
    var read_addr = Module.findExportByName(null, 'read');
    Interceptor.attach(read_addr, {
        onEnter: function (args) {
            this.fd = args[0];
            this.buf = ptr(args[1]);
            this.count = args[2];
        },
        onLeave: function (retval) {
            var fd = this.fd;
            var buf = Memory.readCString(this.buf);
            var count = this.count;
            console.log('Native read(' + fd + ', ' + buf + ', ' + count + '), ret->' + retval);
        }
    });

    // int fstatat(int dirfd, const char *path, struct stat * buf ", int " flags );
    var fstatat_addr = Module.findExportByName(null, 'fstatat');
    Interceptor.attach(fstatat_addr, {
        onEnter: function (args) {
            this.dirfd = args[0];
            this.path = Memory.readCStirng(args[1]);
            this.buf = args[2];
            this.flags = args[3];
        },
        onLeave: function (retval) {
            var dirfd = this.dirfd;
            var path = this.path;
            var buf = this.buf;
            var flags = this.flags;
            console.log('Native fstatat(' + dirfd + ', ' + path + ', ' + buf + ', ' + flags + '), ret->' + retval);
        }
    });

    // size_t fwrite( const void *buffer, size_t size, size_t count, FILE *stream );
    var fwrite_addr = Module.findExportByName(null, 'fwrite');
    Interceptor.attach(fwrite_addr, {
        onEnter: function (args) {
            this.buffer = Memory.readCString(ptr(args[0]));
            this.size = args[1];
            this.count = args[2];
            this.stream = args[3];

        },
        onLeave: function (retval) {
            var str = this.buffer;
            var size = this.size;
            var count = this.count;
            var stream = this.stream;
            console.log('Native fwrite(' + str + ', ' + size + ', ' + count + ',' + stream + '), ret->' + retval);

        }
    });

    // ssize_t write (int fd, const void * buf, size_t count);
    var write_addr = Module.findExportByName(null, 'write');
    Interceptor.attach(write_addr, {
        onEnter: function (args) {
            this.fd = args[0];
            this.buf = Memory.readCString(ptr(args[1]));
            this.count = args[2];

        },
        onLeave: function (retval) {
            var fd = this.fd;
            var buf = this.buf;
            var count = this.count;
            console.log('Native write(' + fd + ', ' + buf + ', ' + count + '), ret->' + retval);

        }
    });

    // char *strcpy(char *dest, const char *src);
    var strcpy_addr = Module.findExportByName(null, 'strcpy');
    Interceptor.attach(strcpy_addr, {
        onEnter: function (args) {
            this.dest = args[0];
            this.src = Memory.readCString(args[1]);
        },
        onLeave: function (retval) {
            var dest = Memory.readCString(this.dest);
            var src = this.src;
            console.log('Native strcpy(' + dest + ', ' + src + '), ret->' + retval);

        }
    });

    // char *strcat(char *dest, const char *src)
    var strcat_addr = Module.findExportByName(null, 'strcat');
    Interceptor.attach(strcat_addr, {
        onEnter: function (args) {
            this.dest = Memory.readCStirng(args[0]);
            this.src = Memory.readCStirng(args[1]);
        },
        onLeave: function (retval) {
            var dest = this.dest;
            var src = this.src;
            console.log('Native strcat(' + dest + ', ' + src + '), ret->' + retval);
        }
    });

    // char * strncat ( char * destination, const char * source, size_t num );
    var strncat_addr = Module.findExportByName(null, 'strncat');
    Interceptor.attach(strncat_addr, {
        onEnter: function (args) {
            this.dest = Memory.readCStirng(args[0]);
            this.src = Memory.readCStirng(args[1]);
            this.num = args[2];
        },
        onLeave: function (retval) {
            var dest = this.dest;
            var src = this.src;
            var num = this.num;
            console.log('Native strncat(' + dest + ', ' + src + ', ' + num + '), ret->' + retval);
        }
    });

    // char *strncpy(char *dest, const char *src, size_t n);
    var strncpy_addr = Module.findExportByName(null, 'strncpy');
    Interceptor.attach(strncpy_addr, {
        onEnter: function (args) {
            this.dest = args[0];
            this.src = Memory.readCString(args[1]);
            this.n = args[2];
        },
        onLeave: function (retval) {
            var dest = Memory.readCString(this.dest);
            var src = this.src;
            var n = this.n;
            console.log('Native strncpy(' + dest + ', ' + src + ", " + n + '), ret->' + retval);

        }
    });

    // int rename ( const char * oldname, const char * newname );
    var rename_addr = Module.findExportByName(null, 'rename');
    Interceptor.attach(rename_addr, {
        onEnter: function (args) {
            this.oldname = Memory.readCString(args[0]);
            this.newname = Memory.readCString(args[1]);
        },
        onLeave: function (retval) {
            var oldname = this.oldname;
            var newname = this.newname;
            console.log('Native rename(' + oldname + ', ' + newname + '), ret->' + retval);
        }
    });

    // __system_property_get(const char *key, char *value)
    var system_property_get_addr = Module.findExportByName(null, '__system_property_get');
    Interceptor.attach(system_property_get_addr, {
        onEnter: function (args) {
            this.key = args[0];
            this.value = args[1];
        },
        onLeave: function (retval) {
            var key = Memory.readCString(this.key);
            var value = Memory.readCString(this.src);
            console.log('Native __system_property_get(' + key + ', ' + value + '), ret->' + retval);

        }
    });

    // int system (const char* command);
    var system_addr = Module.findExportByName(null, 'system');
    Interceptor.attach(system_addr, {
        onEnter: function (args) {
            this.command = Memory.readCString(args[0]);
        },
        onLeave: function (retval) {
            var command = this.command;
            console.log('Native system(' + command + '), ret->' + retval);
        }
    });

    // void *dlopen(const char *filename, int flag);
    var dloepn_addr = Module.findExportByName(null, 'dlopen');
    Interceptor.attach(dloepn_addr, {
        onEnter: function (args) {
            this.filename = Memory.readCString(args[0]);
            this.flag = args[1];
        },
        onLeave: function (retval) {
            var filename = this.filename;
            var flag = this.flag;
            console.log('Native dlopen(' + filename + ', ' + flag + '), ret->' + retval);
        }
    });

    // char *dlerror(void);
    var dlerror_addr = Module.findExportByName(null, 'dlerror');
    Interceptor.attach(dlerror_addr, {
        onEnter: function (args) {
        },
        onLeave: function (retval) {
            console.log('Native dlerror(), ret->' + Memory.readCString(retval));
        }
    });

    // void *dlsym(void *handle, const char *symbol);
    var dlsym_addr = Module.findExportByName(null, 'dlsym');
    Interceptor.attach(dlsym_addr, {
        onEnter: function (args) {
            this.handle = args[0];
            this.symbol = Memory.readCString(args[1]);
        },
        onLeave: function (retval) {
            var handle = this.handle;
            var symbol = this.symbol;
            console.log('Native dlsym(' + handle + ', ' + symbol + '), ret->' + retval);
        }
    });

    // int dlclose(void *handle);
    var dlclose_addr = Module.findExportByName(null, 'dlclose');
    Interceptor.attach(dlclose_addr, {
        onEnter: function (args) {
            this.handle = args[0];
        },
        onLeave: function (retval) {
            var handle = this.handle;
            console.log('Native dlclose(' + handle + '), ret->' + retval);
        }
    });

    // void* malloc (size_t size);
    var malloc_addr = Module.findExportByName(null, 'malloc');
    Interceptor.attach(malloc_addr, {
        onEnter: function (args) {
            this.size = args[0];
        },
        onLeave: function (retval) {
            var size = this.size;
            console.log('Native malloc(' + size + '), ret->' + retval);
        }
    });

    // long ptrace(enum __ptrace_request request, pid_t pid, void *addr, void *data);
    var ptrace_addr = Module.findExportByName(null, 'ptrace');
    Interceptor.attach(ptrace_addr, {
        onEnter: function (args) {
            this.request = args[0];
            this.pid = args[1];
            this.addr = args[2];
            this.data = args[3];
        },
        onLeave: function (retval) {
            var request = this.request;
            var pid = this.pid;
            var addr = this.addr;
            var data = this.data;
            console.log('Native ptrace(' + request + ', ' + pid + ', ' + addr + ', ' + data + '), ret->' + retval);
        }
    });

    // pid_t fork(void);
    var fork_addr = Module.findExportByName(null, 'fork');
    Interceptor.attach(fork_addr, {
        onEnter: function (args) {

        },
        onLeave: function (retval) {
            console.log('Native fork(), ret->' + retval);
        }
    });

    // pid_t getppid(void);
    var getppid_addr = Module.findExportByName(null, 'getppid');
    Interceptor.attach(getppid_addr, {
        onEnter: function (args) {

        },
        onLeave: function (retval) {
            console.log('Native getppid(), ret->' + retval);
        }
    });

    // int pthread_create(pthread_t *thread, const pthread_attr_t *attr, void *(*start_routine) (void *), void *arg);
    var pthread_create_addr = Module.findExportByName(null, 'pthread_create');
    Interceptor.attach(pthread_create_addr, {
        onEnter: function (args) {
            console.log('Native pthread_create() is called!');
        },
        onLeave: function (retval) {

        }
    });

    // int kill(pid_t pid, int sig);
    var kill_addr = Module.findExportByName(null, 'kill');
    Interceptor.attach(kill_addr, {
        onEnter: function (args) {
            console.log('Native kill(' + args[0].toInt32() + ', ' + args[1].toInt32() + ') is called!');
        },
        onLeave: function (retval) {

        }
    });

    // void exit(int status);
    var exit_addr = Module.findExportByName(null, 'exit');
    Interceptor.attach(exit_addr, {
        onEnter: function (args) {
            console.log('Native exit(' + args[0].toInt32() + ') is called!');
            // return;
        },
        onLeave: function (retval) {

        }
    });

    // void abort(void);
    var abort_addr = Module.findExportByName(null, 'abort');
    Interceptor.attach(abort_addr, {
        onEnter: function (args) {
            console.log('Native abort() is called!');
            // return;
        },
        onLeave: function (retval) {

        }
    });

    // int raise(int sig);
    var raise_addr = Module.findExportByName(null, 'raise');
    Interceptor.attach(raise_addr, {
        onEnter: function (args) {
            console.log('Native raise(' + args[0].toInt32() + ') is called!');
            // return 0;
        },
        onLeave: function (retval) {

        }
    });

};

setTimeout(hook_native, 0);
