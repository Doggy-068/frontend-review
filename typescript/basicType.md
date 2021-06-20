# 基本类型

## string
字符串类型
```typescript
const str: string = 'TypeScript'
```

## number
数字类型
```typescript
const num: number = 1
```

## boolean
布尔类型
```typescript
const bool: boolean = true
```

## Array\<T\>
数组，TypeScript中数组的元素为同一类型
```typescript
const arr: Array<string> = ['JavaScript', 'TypeScript', 'Dart']
```
也可写为
```typescript
const arr: string[] = ['JavaScript', 'TypeScript', 'Dart']
```

## undefined/null
与JavaScript类似

## 元组
规定了元素个数和索引处元素数据类型的数组
```typescript
const tuple: [number, string] = [1, '2']
const anotherTuple: [number, ...string[]] = [1]
```

## 枚举
以语义化的方式存储一系列值
```typescript
enum Direction {
  up,
  left,
  right,
  down
}
```

## any
可以被任意类型赋值，也可给任意类型赋值；  
给变量定义`any`类型相当于放弃`TypeScript`的类型检查
```typescript
// any 给任意类型赋值
const anyValue: any = 123
const str: string = anyValue  // 实际上将 number 赋值给 string
```
```typescript
// 任意类型给 any 赋值
enum Direction {
  up,
  left,
  right,
  down
}
const anyValue: any = Direction
```

## unknown
目前不知道变量的具体类型，通常用于动态内容，如从API获取的数据，这些变量可以是任意类型
```typescript
// unknown可以被任意类型赋值
let data: unknown
data = 'data from API'
data = {
  data: 'data from API',
  code: 200
}
```
`unknown`只能赋值给`any`类型
```typescript
let data: unknown
data = 'data from API'
const str: string = data  // 不能将类型“unkonwn”分配给类型“string”
```
`unknown`不会丢失类型安全
```typescript
let variable: unknown = 'hello'
variable = 600
// 如果不加类型检查直接调用函数，则编译器报错
if (typeof variable === 'function') {
  variable()
}
if (typeof variable === 'string') {
  variable.toUpperCase()
}
```
