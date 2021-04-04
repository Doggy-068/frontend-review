# 组合模式
用小的子对象构成大的对象

## JavaScript实现
```javascript
class MacroCommand {
  commandList = []
  add(command) {
    this.commandList.push(command)
  }
  execute() {
    this.commandList.forEach(item => item.execute())
  }
}
const macroCommand = new MacroCommand()
macroCommand.add({
  execute() {
    console.log('开门')
  }
})
macroCommand.add({
  execute() {
    console.log('开窗')
  }
})
macroCommand.add({
  execute() {
    console.log('开电视')
  }
})
macroCommand.execute()
```
