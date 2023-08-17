function getNonDuplicateArray(str){    
    const freqObj = {};
    let ele;    
    arr = str.split(" ");
    arr.forEach((item)=>{        
        if (freqObj.hasOwnProperty(item)){
            freqObj[item] += 1;        
        } else{
            freqObj[item] = 1;        
        }
    });    
    for (const [key, val] of Object.entries(freqObj)){
        val === 1 ? ele = key : null     
    }
    return ele;
}
console.log(getNonDuplicateArray("5 2 3 2 5"))