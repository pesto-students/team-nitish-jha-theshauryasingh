function divideArray(numbers) {
    let evenNums = []
    let oddNums = []
    /* use push to add numbers to array */
    for (let i = 0; i < numbers.length; i++) {
        ele = numbers[i]
        if (ele % 2 == 0) {
            evenNums.push(ele);
        }
        else {
            oddNums.push(ele);
        }
    }
    console.log("Even Numbers:");
    l = evenNums.length
    if (l == 0){
        console.log('None')
    }
    else { for (let i = 0; i < l; i++) {
        console.log(evenNums[i])
    }}
    console.log("Odd Numbers: ");
    l = oddNums.length
    if (l == 0){
        console.log('None')
    }
    else { for (let i = 0; i < oddNums.length; i++) {
        console.log(oddNums[i])
    }}
    
}

