function m(nombres:Array<string>) {
    let m : boolean;
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].charAt(0) == "M") m = true;
        else m = false;
    }
    return(m);
}
m(["Marta","Mario"]);