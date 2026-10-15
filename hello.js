console.log("Welcome to class");

let name = "OFN";
console.log(name);

let age = 25;
console.log(age);

let attendance = 7 * 60 + 50;
if (attendance <= 8 * 60 + 10) {
    console.log("You came Early to class");
} else {
    console.log("You came late to class");
} 

function printNames() {
    const names = [
        "OFN", "Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona",
        "George", "Hannah", "Isaac", "Julia", "Kevin", "Lily", "Mason", "Nina"
    ];

    names.forEach((name) => {
        console.log(`Hello, ${name}!`);
    });
}

printNames();

