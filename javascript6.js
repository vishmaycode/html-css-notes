console.log('this is tutorial');

let name = 'vishmay';
let name1 = 'vishmay1';
let surname = 'karbotkar';
let surname1 = 'karbotkar1';

console.log(name + " " + surname + " is a good boy");    // treditional way
console.log(name1 + " " + surname1 + " is a good boy");

// using functions to reuse code
function greet(n ,s="naik"){            // s="naik" is a default value
    console.log(n + " " + s + " is a good boy");
    let x = 'this is just for checking scope';
    console.log(x);
}

greet(name,surname);
greet(name1,surname1);
greet(name);

let x = "cnt edit inner one";
console.log(x);


function ss(a){
    return a;
    console.log('anything written here wont be executed'); // unreachable code after return
}

let a = 3;

let retno = ss(a);
console.log(retno);