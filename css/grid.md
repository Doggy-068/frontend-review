# 栅格布局

## HTML结构
```html
<div class="container">
  <div class="item-1">...</div>
  <div class="item-2">...</div>
  ...
</div>
```

## 栅格容器
`div.container` 为栅格容器
```css
display: grid;  /* 块级栅格容器 */
display: inline-grid;  /* 行内栅格容器 */
```

## 栅格轨道
```css
grid-template-columns: repeat(auto-fill, 100px);  /* 自动填充纵向栅格轨道，宽为 100px */
grid-template-rows: 100px 120px;  /* 设置横向栅格轨道，宽度分别为 100px，120px */
grid-auto-rows: 200px;  /* grid-template-rows 之外自动填充的横向栅格轨道宽度 */
column-gap: 20px;  /* 列轨道间隔 20px */
```

## 栅格区域
相邻栅格单元组成的区域
```css
grid-template-areas: "a a d""b b d""c c c";  /* 栅格区域只能是矩形 */
```

## 栅格元素
```css
/* 通过设置起止栅格线放置栅格元素 */
.item-1 {
  /* 以下两行 CSS 效果相同 */
  grid-column: 1 / span 2; /* 从纵向栅格线 1 开始，跨越两条栅格轨道 */
  grid-column: 1 / 3; /* 从纵向栅格线 1 开始，于纵向栅格线 3 结束 */
}

/* 通过设置栅格区域放置栅格元素 */
.item-1 {
  grid-area: a;  /* 位于栅格区域 a */
}
```

## 栅格流
```css
grid-auto-flow: row;  /* 横向排列（默认） */
grid-auto-flow: column dense;  /* 纵向紧凑排列 */
```

## 栅格对齐方式
| 属性名 | 作用的目标 | 属性用于 | 取值 |
| :---: | :---: | :---: | :---: |
| `justify-content` | 整个栅格的横向 | 栅格容器 | `start | center | end | stretch | space-around | space-between | space-evenly` |
| `justify-items` | 全部栅格元素的横向 | 栅格容器 | `start | center | end | stretch` |
| `justify-self` | 栅格元素的横向 | 栅格元素 | `start | center | end | stretch` |
| `align-content` | ... | ... | ... |
| `align-items` | ... | ... | ... |
| `align-self` | ... | ... | ... |
以上属性均有其简写形式，为 `place-xxx`
