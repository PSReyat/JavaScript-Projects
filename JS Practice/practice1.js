const fruits = ["bananas", "oranges", "blueberries", "dragon fruit", "tomatoes"];

fruits.unshift("raspberries");

let i = fruits.length - 1;

fruits[i] = "strawberries";

console.log(fruits);

//==================================================

const Person = {
    firstName: "Bro",
    lastName: "Stuff",
    age: 10,
    hobbies: ["football", "movies", "beyblade"],
    address: {
        houseNo: 30,
        street: "Graveborough Street",
        city: "Honicle",
        country: "Panduras"
    }
}

//console.log(firstName);

const {firstName, lastName} = Person;

console.log(lastName);

console.log(Person.address.city);
console.log(Person.hobbies[2]);

//==================================================

class Life{
    constructor(){
        this.name = "John";
        this.age = 20;
        this.zodiacSign = "Cancer";
    }

    getName(){
        return this.name;
    };
}

const l = new Life();

console.log(l.getName());

// const retailCompanies = companies.filter(company => company.category === "Retail");

// const companiesIn80s = companies.filter(company => company.start >= 1980 && company.start < 1990);

const s = "hello".toUpperCase();

console.log(s);

// classes

class Book{
    constructor(){
        this.title;
        this.author;
        this.year;
    }

    setTitle(title){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }
}

let b = new Book();
b.setTitle("Bro Fist");

console.log(b.getTitle());

