function* getIter(arr) {
    for(let i=0; i<arr.length; i++){
        yield Symbol(arr[i]);
    }
}

arr = ['hello', 'world', 'test'];
gen =  getIter(arr);

for (const a of gen) {
    console.log(a);
}