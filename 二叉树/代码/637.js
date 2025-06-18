/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var traversal = function(node,level,res){
    if(node == null) return;
    if(!res[level]) res[level] = {sum:0,num:0};
    // 累积每层的节点总值以及节点总个数
    res[level].sum += node.val;
    res[level].num += 1;
    if(node.left != null){traversal(node.left,level+1,res)}
    if(node.right != null){traversal(node.right,level+1,res)}
}

var averageOfLevels = function(root) {
    const res = [];
    traversal(root,0,res);
    return res.map(ele => ele.sum/ele.num)
};
 