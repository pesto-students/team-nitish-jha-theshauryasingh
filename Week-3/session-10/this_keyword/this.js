class Person {
    constructor(name, age, gender, nationality) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    introduce () {
        return "hi i am {this.name}. I am {this.age} years old {this.gender} from {this.nationality}.  "
    }
}



let me = new Person('shaurya', 27, 'male', 'indian')
me.introduce();
const abcd = {name : 'dfg', age: 23, gender:'female', nationality: 'indian'};
me.call.introduce(abcd);