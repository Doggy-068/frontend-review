# 弹性盒布局

## HTML结构
```html
<div class="container">
  <div class="item-1">...</div>
  <div class="item-2">...</div>
  ...
</div>
```

## 弹性容器
`div.container` 为弹性容器
```css
display: flex;  /* 块级弹性容器 */
display: inline-flex;  /* 行内弹性容器 */
```

## 主轴与垂轴
`flex-direction` 属性定义主轴方向，垂轴与主轴垂直
```css
flex-direction: row | row-reverse | column | column-reverse;
/**
 * row：主轴方向从左至右，垂轴方向从上至下
 * row-reverse：主轴方向从右至左，垂轴方向从上至下
 * column：主轴方向从上至下，垂轴方向从左至右
 * column-reverse：主轴方向从下至上，垂轴方向从左至右
 */
```

## 主轴排列
`justify-content` 定义弹性元素在主轴上的排列

| 属性值 | 排列 |
| :---: | :---: |
| `flex-start` | 紧邻主轴起边 |
| `flex-end` | 紧邻主轴终边 |
| `center` | 居中 |
| `space-between` | 最外侧元素紧邻主轴起边和终边，元素间等距 |
| `space-around` | 最外侧元素边距d，元素间间距2d |
| `space-evenly` | 最外侧元素边距和元素间距相等 |

## 垂轴排列
`align-items` 定义全部弹性元素在垂轴上的排列  
`align-self` 定义单个弹性元素在垂轴上的排列

| 属性值 | 排列 |
| :---: | :---: |
| `flex-start` | 紧邻垂轴起边 |
| `flex-end` | 紧邻垂轴终边 |
| `center` | 居中 |
| `baseline` | 基线对齐 |
| `stretch` | 可伸缩元素占据整个垂轴 |
