class Person {
    constructor(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    introduce () {
        return "hi i am " + this.name + ". I am " + this.age + " years old " + this.gender + " from " + this.nationality + ".  "
    }
}

let me = new Person('shaurya', 27, 'male', 'indian')
let friend1 = new Person('saksham', 28, 'male', 'indian')
let friend2 = new Person('anurag', 28, 'male', 'indian')

console.log(me.introduce());
console.log(friend1.introduce());
console.log(friend2.introduce());

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
      super(name, age, gender, nationality);
      this.subject = subject;
  }
  study() {
    return `i am ${this.name}, i am studying ${this.subject}` ;
  }
}

let student1 = new Student("shaurya", 28, "male", "indian", "computer science");

console.log(student1.introduce());
console.log(student1.study());



const abcd = {name : 'dfg', age: 23, gender:'female', nationality:'indian'};

console.log(me.introduce.call(abcd));