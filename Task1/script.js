//arrow functions
console.log("*****Arrow functions*****");
let rotunjeste = nr => Math.round(nr);  

let toArray = sir => sir.split(" ");

const pi = 3.14;

let arieCerc = raza => pi * Math.pow(raza, 2);

console.log(rotunjeste(5.55));
let arr = toArray("Acesta este primul task")
console.log(arr);
console.log(arieCerc(3));

arr.forEach(cuv => console.log(cuv, "= ", cuv.length, " "));

//spread operator
console.log("*****Spread Operator*****")
let arr1 = ["este", "primul", "task"];
let arr2 = ["Acesta", ...arr1];
console.log(arr2);

//obiecte
function Judet(nume, municipiu, orase){
    this.nume  = nume;
    this.municipiu = municipiu;
    this.orase = orase;
    this.despre= function() {
        console.log(`Judetul ${this.nume}, municipiul ${this.municipiu}`);
    }
}

const Braila = new Judet("Braila", "Braila", ["Braila", "Ianca", "Insuratei"]);
Braila.despre();

//iterare obiect
console.log("*****Iterare Obiect*****")
for(const atr in Braila){
    console.log(`${atr}= ${Braila[atr]}`);
}

//deep clone
console.log("*****Deep Copy*****")
const deepCopy = JSON.parse(JSON.stringify(Braila))
console.log(deepCopy);
//metode ES6
console.log("*****Object Property Assignment*****")
let pop = {populatie: 200000};
Object.assign(Braila, pop);
console.log("Populatie= ",Braila.populatie);

console.log("*****Array Element Finding*****")
console.log(Braila.orase.find(x => x == "Ianca"));

console.log("*****String Repeating*****");
console.log("Braila".repeat(4));

console.log("*****String Searching*****");
console.log("Orasul Braila".includes("Braila"));

console.log("*****Number Type Checking*****");
console.log(Number.isNaN(42));

console.log("*****Number Safety Checking*****");
console.log(Number.isSafeInteger(42))

console.log("*****Number Comparison*****");
console.log(2 + 3 === 5);

console.log("*****Number Truncation*****");
console.log(Math.trunc(420.07));

console.log("*****Number Sign Determination*****");
console.log(Math.sign(5));
console.log(Math.sign(-5));

//promise
// console.log("*****Promise*****");

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("Gata"), 1000);
// });
  
// promise.then(
//     result => console.log(result),
//     error => console.log(error)
// );

//callback
console.log("*****Callback*****");

function salutare(nume){
    console.log("Salut ", nume);
}

function procNume(callback){
    let nume = "Daniel";
    callback(nume);
}
procNume(salutare);

//async
console.log("*****Async*****");

function rezolvaCuIntarziere() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('Rezolvat');
        }, 2000);
    });
}
  
async function asyncCall() {
    console.log('Apelare');
    const result = await rezolvaCuIntarziere();
    console.log(result);
}
  
// asyncCall();

//closure
console.log("*****Closure*****");
function oras(){
    let nume = "Braila";
    function arataOras(){
        console.log("Orasul ", nume);
    }
    arataOras();
}

oras();