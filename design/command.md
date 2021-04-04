# 命令模式
消除请求发送者和接收者之间的耦合关系

## JavaScript实现
```javascript
//定义命令类
class Command {
  execute
  constructor(method) {
    this.execute = method
  }
}
//绑定命令的函数
function setCommand(button, command) {
  button.addEventListener('click', command.execute)
}
//定义开门动作
function openDoor() {
  console.log('开门')
}
//获得开门命令
const openDoorCommand = new Command(openDoor)
//给元素绑定命令
setCommand(document.getElementById('btn'), openDoorCommand)
```
