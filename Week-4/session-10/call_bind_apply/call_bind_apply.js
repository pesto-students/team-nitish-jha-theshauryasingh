class Calculator {
    add (a,b){
        //console.log(a,b);
        return a + b ;
    }
    subtract (a,b){
        return a - b ;
    }
    multiply (a,b){
        console.log(a,b);
        return a * b ;
    }
    divide (a,b){
        return a / b ;
    }
}

class ScientificCalculator extends Calculator {
    square (a){
        return a * a ;
    }
    cube (a){
        return a * a * a ;
    }
    power (a,b){
        console.log(a,b);
        return a ** b ;
    }
}

const calc = new ScientificCalculator();
const calc1 = new Calculator()

// let args;
// args = {a:10, b:5};

console.log(calc1.add.call(null,10,5));
console.log(calc1.subtract.apply(null,[10,5]));

var multiplyByTwo = calc.multiply.bind(undefined, 2);
var powerOfThree = calc.power.bind(undefined, 2);

console.log(multiplyByTwo(5));
console.log(powerOfThree(3));




