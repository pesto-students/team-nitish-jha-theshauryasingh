class Calculator {
    add (){
        //console.log(a,b);
        //loop on 'this.nums'
        const sum = this.a + this.b;
        //console.log(sum);
        return sum;
    }
    subtract (a,b){
        return a - b
    }
    multiply (a,b){
        return a * b
    }
    divide (a,b){
        return a/b
    }
}

class ScientificCalculator extends Calculator {
    square (a,b){
        return a + b
    }
    cube (a,b){
        return a - b
    }
    power (a,b){
        return a * b
    }
}

const calc = new ScientificCalculator();
let calc1 = new Calculator()
const args = {nums : {a:2, b:6, c:7}};
console.log(calc1.add.call(args));







