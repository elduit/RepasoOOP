function color(arr:Array<string>) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "rojo" || arr[i] === "naranja" || arr[i] === "amarillo" || arr[i] === "verde" || arr[i] === "cian" || arr[i] === "azul" || arr[i] === "violeta"){
            console.log("El " + arr[i] + " si esta en el arcoiris");
        }else{
            console.log("El "+ arr[i] +" no esta en el arcoiris");
        }
        
    }
}
color(["azul", "marron"]);