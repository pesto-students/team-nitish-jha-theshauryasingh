var longestConsecutive = function(nums) {
    if (nums.length === 0){
        return 0;
    }
    const uniqueNums = new Set(nums);
    let longest = 1
    uniqueNums.forEach((element)=>{
        if (uniqueNums.has(element-1)) {
            return;
        }
        else{
            let temp = element + 1
            let currentCount = 1;
            while(uniqueNums.has(temp)){
                currentCount = currentCount + 1;
                temp = temp + 1;
            }
            if (longest < currentCount){
                longest = currentCount
            }
        }
    })
    return longest;
};
