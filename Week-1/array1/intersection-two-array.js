function intersectionArray(arr1, arr2) {
    const numSet = new Set();
    const intersectionArray = new Array();
    arr1.forEach((ele)=> {
        numSet.add(ele);
    }) 
    arr2.forEach((ele)=> {
        if (numSet.has(ele)){
            intersectionArray.push(ele);
        }
    })
    return intersectionArray;
}

arr1 = [1,2,3,4,5]
arr2 = [4,5,6,7,8]
console.log(intersectionArray(arr1, arr2));
