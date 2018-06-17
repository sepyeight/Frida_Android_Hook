adb forward tcp:27042 tcp:27042
adb forward tcp:27043 tcp:27043
adb push frida-server-11.0.12-android-arm /data/local/tmp/frida-server
adb shell "su -c 'chmod 0777 /data/local/tmp/frida-server'"
adb shell "su -c '/data/local/tmp/frida-server'"
