function getContinent(Nombre:string){
    let Continente:string
    if (Nombre == "Francia" || Nombre == "España" || Nombre == "Alemania"){
        Continente = "Europa";
    }else if (Nombre == "Argentina" || Nombre == "Brasil" || Nombre == "Estados Unidos"){
        Continente = "America";
    }else if (Nombre == "Senegal" || Nombre == "Uganda" || Nombre == "Sudafrica"){
        Continente = "Africa";
    }else if(Nombre == "China" || Nombre == "Rusia" || Nombre == "Taiwan"){
        Continente = "Asia";
    }else if(Nombre == "Australia" || Nombre == "Nueva Zelanda" || Nombre == "Fiyi"){
        Continente = "Oceania";
    }
    console.log(Continente);
}
getContinent("España");
