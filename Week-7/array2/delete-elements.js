function deleteFromArray(arr){
    let filteredArray = arr.filter((element)=>{
        if (element%2 !=0 && element%3 !=0){
            return true;
        }
    });
    return filteredArray;
}
