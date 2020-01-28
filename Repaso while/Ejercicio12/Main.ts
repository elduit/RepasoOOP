let suma : number = 0; 
function sumaArr(arr:Array<string>) {
    for (let i = 0; i < arr.length; i++) {
        suma = (suma + arr[i].length);
    }
    return(suma);
}
function parimpar(num:number) {
    if (num % 2 == 0)  console.log("El numero es par");
    else console.log("El numero es impar");
}
sumaArr(["hola", "adios"]);
parimpar(suma);