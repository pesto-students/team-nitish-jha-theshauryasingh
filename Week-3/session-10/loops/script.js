function drawTriangle (n) {
    for (let i = 0; i < n; i++) {
        // console.log('i =',i);
        let str = '*';
        for (let j = 0; j < i; j++) {
            //console.log('i =',i, 'j =',j, 'str=', str.concat(str));
            str = str.concat(str);
            //str = str + str;
            //console.log('i =',i, 'j =',j, 'str=', str);
        }
        console.log(str);
    }
}

drawTriangle(3)