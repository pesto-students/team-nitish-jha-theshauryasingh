function inorder(root, arr, k){
    if (root === null){
        return
    }
    inorder(root.left, arr, k)
    if (arr.length < k){
        arr.push(root.val)
        inorder(root.right, arr, k)
    }
    return
}

var kthSmallest = function(root, k) {
    let arr = new Array();
    inorder(root, arr, k);
    console.log(arr);
    return arr[arr.length-1];
};