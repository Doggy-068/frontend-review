# 混合
可复用的代码片段

## 无参数混合
```scss
@mixin panel-title {
  .title {
    border-left: 5px solid #409EFF;
    height: 2em;
    line-height: 1;
  }
}

.panel-overall {
  @include panel-title;
}
```
```css
.panel-overall .title {
  border-left: 5px solid #409EFF;
  height: 2em;
  line-height: 1;
}
```

## 有参数的混合
```scss
@mixin titleText($color: #000) {
  font-size: 2em;
  height: 1.5em;
  line-height: 1;
  color: $color;
}

.panel-title {
  @include titleText(#333);
}
```
```css
.panel-title {   
  font-size: 2em;
  height: 1.5em; 
  line-height: 1;
  color: #333;   
}
```
