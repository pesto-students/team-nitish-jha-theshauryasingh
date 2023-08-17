function revNumber(num){
    revNum = 0
    while(num != 0){
        temp = num % 10;
        revNum = revNum * 10 + temp;
        num = num / 10 ;
    }
    return revNum
}