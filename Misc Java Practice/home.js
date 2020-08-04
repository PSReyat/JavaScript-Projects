//JavaScript practice file.

console.log("hello bro");
console.log("what");

let firstName = prompt("What is your first name?");
let lastName = prompt("What is your last name?");
let age = prompt("What is your age?");

let person = {
    firstName,
    lastName,
    age
};

function displayPerson(person){
    document.getElementById("stuff").innerHTML = "Hello " + person.firstName + " " + person.lastName + 
    "\nAge: " + person.age;
}

displayPerson(person);