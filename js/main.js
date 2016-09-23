console.log("Funciona!!!!");
var numero = 0;

function saludar(nombre){
    var saludo = "Hola " + nombre;
    alert(saludo);
    return saludo;
}
// Encontrar números pares,
// si es par escribe Fizz, en otro caso Buzz
function FizzBuzzSimple(num){
    // sobrante = ;
    // 0, "", NaN, undefined, null -> Falsos 
    if((num % 2) === 0){
    // if(num % 2){ // y se invierten las instrucciones
        // El número es par
        console.log("Fizz");
    } else {
        // El número no es par
        console.log("Buzz");
    }
} 

// Fibonacci
// 1, 2, 3, 4, 5, 6, 7, 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55....

// f(n) = f(n-2) + f(n-1)
// f(5) = 2 + 3
// Recursión 
function fibonacci(n){
    var res = 0;
    if(n == 1){
        res = 0;
    } else if(n == 2){
        res = 1;
    } else{
        res = fibonacci(n-2) + fibonacci(n-1);
    }
    return res;
}
// fibonacci(3)
//res = fibonacci(1) + fibonacci(2);
//res = 0 + 1;
// res = 1;


// Factorial
// n! = n * (n-1) * (n-2)... * 1
// n! = n * (n-1)!

function factorial(n){
    var resultado = 0;

    if(n == 1){
        resultado = 1;
    } else {
        resultado = n * factorial(n-1);
    }
    return resultado;
}

// factorial(5)
// 5 * factorial(4)
// 5 * (4 * factorial(3))
// 5 * (4 * (3 * factorial(2)))
// 5 * (4 * (3 * (2 * factorial(1))))
// 5 * (4 * (3 * (2 * 1)))

function imprimirFibonacci(campo_texto) {
    var n = campo_texto.value;
    console.log(fibonacci(n));
}














