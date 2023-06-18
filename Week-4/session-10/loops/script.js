function drawTriangle (n) {
    for (let i = 1; i <= n; i++) {
        let temp = '';
        for (let j = 0; j < i; j++) {
            //console.log('i =',i, 'j =',j, 'str=', str.concat(str));
            temp = temp.concat('*');
            //str = str + str;
            //console.log('i =',i, 'j =',j, 'str=', str);
        }
        console.log(temp);
    }
}

drawTriangle(10)