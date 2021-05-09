//let a = prompt("Enter First number");
//let b = prompt("Enter Second number");
//let c = prompt("Enter Third number");
//let x = Math.max(a,b,c);
//document.write(`${a},${b},${c} : Largest = ${x}`)


function f1(a, b, c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}
let a = prompt("Enter First number")
let b = prompt("Enter Second number");
let c = prompt("Enter Third number");
let x = f1(a,b,c);
document.write(`${a},${b},${c} : Largest = ${x}`)

