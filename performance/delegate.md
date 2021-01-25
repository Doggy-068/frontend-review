# 事件委托
利用事件冒泡机制，将子元素的事件委托给祖先元素处理

## JavaScript实现
```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
</ul>
```

```javascript
document.querySelectorAll('ul')[0].addEventListener('click', event => {
  const target = event.target
  console.log(target.innerText)
})
```
