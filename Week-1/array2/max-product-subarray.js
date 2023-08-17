function maxProductSubarray(arr){
    let filteredArray = arr.filter((element)=>{
        if (element%2 !=0 && element%3 !=0){
            return true;
        }
    });
    return filteredArray;
}

// input 5 2 3 -2 4 5
//Example output: 20