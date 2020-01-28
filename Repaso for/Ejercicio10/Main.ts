function sumaArr(arr:Array<string>) {
    let suma : number = 0; 
    for (let i = 0; i < arr.length; i++) {
        suma = (suma + arr[i].length);
    }
    return(suma);
}
sumaArr(["hola", "adios"]);