# 二叉树
每个节点至多只有左右两个子节点的树
```typescript
class BinaryTreeNode {
  val: number
  left: BinaryTreeNode | null
  right: BinaryTreeNode | null
  constructor(val: number, left?: BinaryTreeNode, right?: BinaryTreeNode) {
    this.val = val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}
```

## 二叉树的遍历
从根节点开始，先遍历其左子树，再遍历其右子树，根据输出节点的时机不同，分为先序遍历，中序遍历和后序遍历
```typescript
/**
 *          0    <- rootNode
 *        /  \
 *       1    2
 *      /\   /\
 *     3 4  5 6
 *     \
 *     7
 */
```

### 先序遍历
遍历至某个节点时就输出该节点
```typescript
//递归实现
function preOrderTraversal(node: BinaryTreeNode) {
  const res = [];
  (function executor(node: BinaryTreeNode | null) {
    if (node !== null) {
      res.push(node.val)
      executor(node.left)
      executor(node.right)
    }
  })(node)
  return res
}

console.log(preOrderTraversal(rootNode)) // [0, 1, 3, 7, 4, 2, 5, 6]
```
```typescript
//循环实现
function preOrderTraversal(node: BinaryTreeNode) {
  const res = []
  const stack: BinaryTreeNode[] = []
  let point: BinaryTreeNode | null = node
  while (stack.length !== 0 || point !== null) {
    while (point !== null) {
      res.push(point.val)
      stack.push(point)
      point = point.left
    }
    if (stack.length !== 0) {
      const node = stack.pop() as BinaryTreeNode
      point = node.right
    }
  }
  return res
}

console.log(preOrderTraversal(rootNode)) // [0, 1, 3, 7, 4, 2, 5, 6]
```

### 中序遍历
遍历完某个节点的左子树后才输出该节点
```typescript
//递归实现
function midOrderTraversal(node: BinaryTreeNode) {
  const res = [];
  (function executor(node: BinaryTreeNode | null) {
    if (node !== null) {
      executor(node.left)
      res.push(node.val)
      executor(node.right)
    }
  })(node)
  return res
}

console.log(midOrderTraversal(rootNode)) // [3, 7, 1, 4, 0, 5, 2, 6]
```
```typescript
//循环实现
function midOrderTraversal(node: BinaryTreeNode) {
  const res = [];
  const stack: BinaryTreeNode[] = []
  let point: BinaryTreeNode | null = node
  while (stack.length !== 0 || point !== null) {
    while (point !== null) {
      stack.push(point)
      point = point.left
    }
    if (stack.length !== 0) {
      const node = stack.pop() as BinaryTreeNode
      res.push(node.val)
      point = node.right
    }
  }
  return res
}

console.log(midOrderTraversal(rootNode)) // [3, 7, 1, 4, 0, 5, 2, 6]
```

### 后序遍历
遍历完某个节点的左子树和右子树后才输出该节点
```typescript
//递归实现
function postOrderTraversal(node: BinaryTreeNode) {
  const res = [];
  (function executor(node: BinaryTreeNode | null) {
    if (node !== null) {
      executor(node.left)
      executor(node.right)
      res.push(node.val)
    }
  })(node)
  return res
}

console.log(postOrderTraversal(rootNode)) // [7, 3, 4, 1, 5, 6, 2, 0]
```
