function impares(numMax:number) {
    for (let i = 1; i <= numMax; i+=2){
        if (i % 2 != 0) console.log(i); 
    }
}
impares(600000);