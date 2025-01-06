class TreeNode {
    constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function lowestCommonAncestor(root, p, q) {
    if (root === null || root === p || root === q) {
      return root;
    }
  
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
  
    if (left !== null && right !== null) {
      return root;
    }
  
    return left !== null ? left : right;
  }

  const node7 = new TreeNode(7);
  const node4 = new TreeNode(4);
  const node6 = new TreeNode(6);
  const node2 = new TreeNode(2, node7, node4);
  const node5 = new TreeNode(5, node6, node2);
  const node0 = new TreeNode(0);
  const node8 = new TreeNode(8);
  const node1 = new TreeNode(1, node0, node8);
  const root = new TreeNode(3, node5, node1);
  
  const lca = lowestCommonAncestor(root, node5, node1);
  console.log("LCA:", lca.val);  
  