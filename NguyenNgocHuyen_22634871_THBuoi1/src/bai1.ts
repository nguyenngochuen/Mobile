export class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    public displayInfo():void{
        console.log(`Name: ${this.name}, Age:${this.age}`);
    
    }
}

class Student extends Person{
    grade:number;

    constructor(name: string, age: number, grade:number){
        super(name, age);
        this.grade=grade;
    }
    

}

class Car{

    band: string;
    model: string;
    year: number

    constructor(band:string, model:string, year:number){
        this.band=band;
        this.model=model;
        this.year=year;
    }

    public showCar():void{
        console.log()
    }
}


class Rectange {
    width:number;
    height:number;


    constructor(width:number, height:number){
        this.width=width;
        this.height=height;
    }

    public area(): void{
        console.log(`Area: ${this.width} * ${this.height} `)
    }

    public perimeter(): number{
        return 2 *(this.height + this.width);


    }
}

class BankAccount{
    balance: number

    constructor(balance:number){
        this.balance=balance;
    }

    public desposit(amount:number):void{
        if(amount<=0) throw new Error("Nap phai hon 0d")
        this.balance+=amount
        
    }

    public withdraw(amount:number):void{
        if(amount<=0) throw new Error("Rut phai hon 0d");
        if(amount > this.balance) throw new Error("So du khong du")
        this.balance-=amount

    }
}


class Book{
    title:string;
    author:string;
    year: number;

    constructor(title:string, author:string, year: number){
        this.title=title;
        this.author=author;
        this.year=year;
    }
}
