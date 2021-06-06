# Maps
一种由键值对构成的数据类型，可被`@each`遍历

## 遍历Maps
```scss
$colorMap: (
  pending: #409EFF, 
  resolved: #67C23A, 
  rejected: #F56C6C
);

@each $key, $value in $colorMap {
  .#{$key} {
    color: $value;
  }
}
```
```css
.pending {       
  color: #409EFF;
}

.resolved {      
  color: #67C23A;
}

.rejected {      
  color: #F56C6C;
}
```
