var isValidBST = function(root, lessThan = Infinity, largerThan = -Infinity) {
    if (root === null){
        return true;
    }
    if (root.val >= lessThan || root.val <= largerThan){
        return false;
    }
    return isValidBST(root.left, root.val, largerThan) && isValidBST(root.right, lessThan, root.val);
    
};
