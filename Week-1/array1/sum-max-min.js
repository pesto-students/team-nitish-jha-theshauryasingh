function getMaxMinSumElement(arr){
    let min = Infinity;
    let max = -Infinity;   
    arr.forEach((item)=>{
        if (item < min){            
            min = item
        }        
        if (item > max){
            max = item        
        }
    });    
    return [min, max];
}
inp = "5 2 9 1 7";
arr = inp.split(" ");
console.log(getMaxMinSumElement(arr));
