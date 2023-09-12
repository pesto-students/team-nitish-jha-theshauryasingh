function expandAroundCenter(s, l, r){
    while(l>= 0 && r<=s.length && s.charAt(l)===s.charAt(r) ){
        l = l - 1;
        r = r + 1;
    }
    return r - l - 1
}

var longestPalindrome = function(s) {
    let maxLen = 0;
    let start = 0;

    for(let i=0; i<s.length; i++){
        let l1 = expandAroundCenter(s, i, i);
        let l2 = expandAroundCenter(s, i, i+1);
        len = Math.max(l1, l2)
        console.log(start, maxLen, l1, l2, len);
        if (len > maxLen) {
            maxLen = len;
            temp = Math.floor((len-1)/2);
            start = i - temp;
        }
    }
    return s.substr(start,maxLen);
    
};
