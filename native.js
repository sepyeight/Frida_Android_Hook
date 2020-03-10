/**
 * int SSL_get_fd(const SSL *ssl);
 */
var SSL_get_fd_addr = Module.findExportByName(null, "SSL_get_fd");
var SSL_get_fd = new NativeFunction(SSL_get_fd_addr, "int", ["pointer"]);

/**
 * get remote ip
 * int getpeername(int sockfd, struct sockaddr *addr, socklen_t *addrlen);
 *
 */
var getpeername_addr = Module.findExportByName(null, "getpeername");
var getpeername = new NativeFunction(getpeername_addr, "int", ["int", "pointer", "pointer"]);

/**
 * get local host ip
 * int getsockname(int sockfd, struct sockaddr * localaddr, socken_t * addrlen);
 */
var getsockname_addr = Module.findExportByName(null, "getsockname");
var getsockname = new NativeFunction(getsockname_addr, "int", ["int", "pointer", "pointer"]);

/**
 * convert ip to string
 * const char *inet_ntop(int af, const void *src, char *dst, socklen_t size);
 */
var inet_ntop_addr = Module.findExportByName(null, "inet_ntop");
var inet_ntop = new NativeFunction(inet_ntop_addr, "pointer", ["int", "pointer", "pointer", "int"]);

/**
 * returns a pointer to the SSL_SESSION
 * SSL_SESSION *SSL_get_session(const SSL *ssl);
 */
var SSL_get_session_addr = Module.findExportByName(null, "SSL_get_session");
var SSL_get_session = new NativeFunction(SSL_get_session_addr, "pointer", ["pointer"]);

/**
 * returns a pointer to the internal session id value for the session s
 * const unsigned char *SSL_SESSION_get_id(const SSL_SESSION *s, unsigned int *len)
 */
var SSL_SESSION_get_id_addr = Module.findExportByName(null, "SSL_SESSION_get_id");
var SSL_SESSION_get_id = new NativeFunction(SSL_SESSION_get_id_addr, "pointer", ["pointer", "pointer"])

function hook_native() {

    /**
     * target: int SSL_write(SSL *ssl, const void *buf, int num);
     * ssl: getpeername->SSL_get_fd->ssl
     * buf: msg which not encrypt
     * num: buf len
     */
    Interceptor.attach(Module.findExportByName(null, "SSL_write"), {
        onEnter: function (args) {
            this.ssl_st = args[0];
            this.buf = args[1];
            this.num = args[2].toInt32();
            var message = getPortsAndAddresses(SSL_get_fd(this.ssl_st), false);
            message["ssl_session_id"] = getSSLSessionID(this.ssl_st);
            message["function"] = "SSL_write";
            send(message, Memory.readByteArray(this.buf, this.num));
        },
        onLeave: function (retval) {
        }
    });

    /**
     * int SSL_read(SSL *ssl, void *buf, int num);
     * The read operation was successful. The return value is the number of bytes actually read from the TLS/SSL connection.
     */
    Interceptor.attach(Module.findExportByName(null, "SSL_read"), {
        onEnter: function (args) {
            this.ssl_st = args[0];
            this.buf = args[1];
            this.num = args[2].toInt32();
            var message = getPortsAndAddresses(SSL_get_fd(this.ssl_st), true);
            message["ssl_session_id"] = getSSLSessionID(this.ssl_st);
            message["function"] = "SSL_read";
            this.message = message;
        },
        onLeave: function (retval) {
            retval |= 0;
            if(retval <= 0){
                return;
            }
            send(this.message, Memory.readByteArray(this.buf, retval));
        }
    });
}

/**
 * get port android ip
 * @param sockfd
 * @param isRead isRead: true(SSL_read), isRead: false(SSL_write)
 */
function getPortsAndAddresses(sockfd, isRead) {
    /**
     * addr_len = sizeof(addr);  // this is what's missing
     * getpeername(sock_fd, &addr, &addr_len);
     * @type {number}
     * https://stackoverflow.com/questions/14157187/how-to-get-peer-address-from-openssl-bio-object
     * struct sockaddr addr
     * sizeof( struct sockaddr ) = 0x10
     */
    var strAddrSize = 28;
    var addrLenSize = 0x4;
    var addr = Memory.alloc(strAddrSize);
    var addrlen = Memory.alloc(addrLenSize);

    Memory.writeU32(addrlen, strAddrSize);

    var IPv6 = 10;
    var IPv4 = 2;

    /**
     * struct sockaddr {
     *     unsigned short   sa_family;
     *     char             sa_data[14];
     *  };
     */

        // struct sockaddr_in6 {
        //            sa_family_t     sin6_family;   /* AF_INET6 */
        //            in_port_t       sin6_port;     /* port number */
        //            uint32_t        sin6_flowinfo; /* IPv6 flow information */
        //            struct in6_addr sin6_addr;     /* IPv6 address */
        //            uint32_t        sin6_scope_id; /* Scope ID (new in 2.4) */
        //        };
        //
        //        struct in6_addr {
        //            unsigned char   s6_addr[16];   /* IPv6 address */
        //        };

        // struct sockaddr_in {
        //            sa_family_t    sin_family; /* address family: AF_INET */
        //            in_port_t      sin_port;   /* port in network byte order */
        //            struct in_addr sin_addr;   /* internet address */
        //        };
        //
        //        /* Internet address. */
        //        struct in_addr {
        //            uint32_t       s_addr;     /* address in network byte order */
        //        };

    var message = {};
    var src_dst = ["src", "dst"];

    for (var i = 0; i < src_dst.length; i++) {
        if ((src_dst[i] == "src") ^ isRead) {
            getsockname(sockfd, addr, addrlen);
        } else {
            getpeername(sockfd, addr, addrlen);
        }

        var addrStr = Memory.alloc(80);
        if (Memory.readU16(addr) == IPv6) {
            inet_ntop(IPv6, addr.add(8), addrStr, 80);
            var port = Memory.readU16(addr.add(2));
            var ipv6 = Memory.readCString(addrStr);
            // console.log("ip->" + ipv6 + ", port->" + port);
            message["ipVer"] = "IPv6";
            message[src_dst[i] + "_port"] = port;
            message[src_dst[i] + "_addr"] = ipv6;
        } else if (Memory.readU16(addr) == IPv4) {
            inet_ntop(IPv4, addr.add(), addrStr, 80);
            var port = Memory.readU16(addr.add(4));
            var ipv4 = Memory.readCString(addrStr);
            // console.log("ip->" + ipv4 + ", port->" + port);
            message["ipVer"] = "IPv4";
            message[src_dst[i] + "_port"] = port;
            message[src_dst[i] + "_addr"] = ipv4;
        }
    }

    return message;

}

function getSSLSessionID(ssl) {
    var session = SSL_get_session(ssl);
    if (session == 0) {
        return 0;
    }
    var len = Memory.alloc(4);
    var p = SSL_SESSION_get_id(session, len);
    var len = Memory.readU32(len);

    var session_id = "";
    for (var i = 0; i < len; i++) {
        // Read a byte, convert it to a hex string (0xAB ==> "AB"), and append
        // it to session_id.
        session_id +=
            ("0" + Memory.readU8(p.add(i)).toString(16).toUpperCase()).substr(-2);
    }

    return session_id;
}


function hook() {
    hook_native();
}


function dump_memory(addr, size) {
    var buf = Memory.readByteArray(ptr(addr), size);
    console.log(hexdump(buf, {
        offset: 0,
        length: size,
        header: true,
        ansi: true
    }));
}

setTimeout(hook, 0);