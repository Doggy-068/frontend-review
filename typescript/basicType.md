# 基本类型

## Any
任意类型，可赋值给其它类型，也可被其它类型赋值
```typescript
let a: any = '123'
let num: number = 123
a = num
num = a
```

## Number
数字类型，64位双精度浮点数
```typescript
let num: number = 0
num = Infinity
num = NaN
num = 0b10
num = 0xA1
num = 0o71
```

## Bigint
大整数类型，不能与 `number` 做数学运算
```typescript
let bint: bigint = 12n
```

## String
字符串类型

## Boolean
布尔类型

## Array
数组类型，数组元素类型一致
```typescript
let arr: string[] = ['a', 'r', 'r', 'a', 'y']
```

## Tuple
元组类型，各元素类型可不一致
```typescript
let tuple: [number, string] = [123, '123']
```

## Enum
枚举类型
```typescript
enum Day { Mon, Tue, Wed, Thu, Fri, Sat, Sun }
```

## Symbol
每个从 Symbol() 返回的值都是唯一的
```typescript
let s: symbol = Symbol('key')
```

## Null
表示变量已创建，但未指向任何对象 

## Undefined
未赋值的变量

## Void
表示函数没有返回值

## Unknown
表示不知道的类型，其值动态获取，可被其他类型赋值
```typescript
let data: unknown = '123'
data = { status: 200 }
```

## Never
表示不存在的类型，不可被其它类型赋值

## Object
对象，引用数据类型
