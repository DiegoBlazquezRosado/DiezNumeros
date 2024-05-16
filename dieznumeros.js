/*
Se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:
1º Cuantos son positivos
2º Cuantos son negativos
3º Cuantos son pares
*/

function diezNumeros(){
    let count = 0;
    let positive = 0;
    let negative = 0;
    let even = 0;
    const arr=[];
    for (let i=0; i<10; i++) {
        arr.push(prompt(`Pasa el número ${i+1}`));
    }   
    console.log(arr);
    for (let j=0; j<arr.length; j++) {
        if (arr[j]>=0) {
            positive++;
        } 
        if (arr[j]<0) {
            negative++;
        }
        if ((arr[j] % 2) === 0) {
            even++;
        }
    }
    return console.log("Hay "+positive+" positivos, ", negative+" negativos y ", even +" pares.");
}

diezNumeros();
