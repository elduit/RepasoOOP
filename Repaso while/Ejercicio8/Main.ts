function par(arr:Array<number>) {
    let i : number = 0;
    let par : boolean = false;
    while (arr[i] % 2 == 0 || i < arr.length) {
        if (arr[i] % 2 == 0 ){
            par = true;
        }else par = false;
        i++
    }
    return(par);
}
par([1,3,5,2]);