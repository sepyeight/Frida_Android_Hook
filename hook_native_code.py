import frida
import sys

package_name = 'com.alex.lookwifipassword'

rdev = frida.get_remote_device()
# 脚本控制app启动
pid = rdev.spawn(package_name)
session = rdev.attach(pid)
rdev.resume(pid)

def on_message(message, data):
    if message['type'] == 'error':
        print(message['stack'])
    else:
        print(message)


with open('hook.js', 'r') as f:
    jscode = f.read()

script = session.create_script(jscode)
script.on('message', on_message)
script.load()
sys.stdin.read()
session.detach()






