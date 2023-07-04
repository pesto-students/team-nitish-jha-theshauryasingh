// Section-1 Inheritance

class Vehicle{
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log("Driving " + this.make + " " + this.model + ".")
    }
}

class Car extends Vehicle{
    constructor(make, model, year, color, numSeats){
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

class RideShareCare extends Car{
    constructor(make, model, year, color, numSeats, isAvailable){
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}

v1 = new Vehicle('tata', 'tiago', '2022', 'pearl white');
console.log(v1);
v1.drive();

// Section-2 Polymorphism

class Shape{
    constructor(side){
        this.side = side;
    }
    calculateArea(side){
        return side * side;
    }
}

class Rectangle extends Shape{
    calculateArea(length, width){
        const area = length * width ;
        return area;
    }
}

class Triangle extends Shape{
    calculateArea(base, height){
        return (base * height)/2;
    }
}

class Circle extends Shape{
    calculateArea(radius){
        return Math.PI * radius * radius;
    }
}

let rectangle1 = new Rectangle();
console.log(rectangle1.calculateArea(2,5));

let triangle1 = new Triangle();
console.log(triangle1.calculateArea(2,5));

let circle1 = new Circle();
console.log(circle1.calculateArea(2));

// Section-3 Encapsulation and Abstraction


class BankAccount{
    #accountNumber;
    #balance; 
    #accountHolderName;

    constructor(accountNumber, balance, accountHolderName){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountHolderName = accountHolderName;
    }
}

class CheckingAccount extends BankAccount{
    withdraw(amount){
        this.balance = this.balance - amount;
        return 'failed';
    }

    deposit(amount){
        this.balance = this.balance + amount;
        return 'failed';
    }

    getBalance(){
        return this.balance;
    }
}

class SavingsAccount extends BankAccount{
    withdraw(amount){
        updatedBalance = this.balance - amount;
        if (updatedBalance > 0){
            this.balance = updatedBalance;
            return 'failed';
        }
    }

    deposit(amount){
        this.balance = this.balance + amount;
        return 'success';
    }

    getBalance(){
        return this.balance;
    }
}