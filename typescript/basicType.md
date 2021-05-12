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
