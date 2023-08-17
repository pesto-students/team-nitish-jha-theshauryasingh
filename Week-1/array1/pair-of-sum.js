function pairOfSum(arr, sum){
    arrObject = {};
    pairList = []
    arr.forEach((element, index) => {
        // console.log(element, index)
        if (sum - element in arrObject) {
            // console.log('check in object');
            pairList.push([sum - element, element]);
        }
        else {
            //put in object
            arrObject[element] = index;
        }
    })
    return pairList;
}

//Sample Output: [[2, 10], [4, 8]]
console.log(pairOfSum([2,4,6,8,10], 12));
