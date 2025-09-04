import { Person } from "./bai1";

var person = new Person ("Huyen", 21);
console.log(person)
class Rectange {
    width: Number;
    height: Number;


    constructor(width: Number, height: Number) {
        this.width = width;
        this.height = height;
    }

    public area(): Number {
        console.log('${this.width+this.height}');
    }
}
