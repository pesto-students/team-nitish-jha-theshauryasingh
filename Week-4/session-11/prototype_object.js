let person = {
    name : 'shaurya',
    age : 27,
    email : 'shauryasingh96@gmail.com',
    getAge(){
        return this.age;
    },
    setAge(newAge){
        this.age = newAge;
    }
}

Object.defineProperty(person, "name", {writable: false });
Object.defineProperty(person, "email", {writable: false });
Object.defineProperty(person, "age", {writable: true });

console.log(person.getAge())
person.setAge(26)
console.log(person.getAge())
person.setAge(25)
console.log(person.getAge())
person.setAge(30)
console.log(person.getAge())
person.setAge(27)
console.log(person.getAge())

let vehicle = { 
    make : 'Tata',
    model : 'Tiago',
    year : '2022',
    getDetails(){
        strabcd = "I have " + this.make + " " + this.model + " " + this.year + " ";
        return strabcd ;
    },
}
// function vehicle(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     getDetails{
//         strabcd = "I have " + this.make + " " + this.model + " " + this.year + " ";
//         return strabcd ;
//     },
//   }
console.log(vehicle.getDetails());

function Vehicle(make, model, year, numDoors) {
  Avenger.call(this, name, power, weapon); // inherit properties from Avenger
  this.superpower = superpower; // add new property
}
