function zodiac(dia:number, mes:number) {
    let simbolo : string;
    if (mes == 1 && dia >= 20){
        simbolo = "Acuario"
    }else if (mes == 1 && dia <= 19){
        simbolo = "Capricornio";
    }else if (mes == 2 && dia <= 18){
        simbolo = "Acuario";
    }else if (mes == 2 && dia >= 19){
        simbolo = "Piscis";
    }else if (mes == 3 && dia <=20 ){
        simbolo = "Piscis";
    }else if (mes == 3 && dia >= 21){
        simbolo = "Aries";
    }else if (mes == 4 && dia <= 19){
        simbolo = "Aries";
    }else if (mes == 4 && dia >= 20){
        simbolo = "Tauro";
    }else if (mes == 5 && dia <= 20){
        simbolo = "Tauro";
    }else if (mes == 5 && dia >= 21){
        simbolo = "Geminis";
    }else if (mes == 6 && dia <= 20){
        simbolo = "Geminis";
    }else if (mes == 6 && dia >= 21){
        simbolo = "Cancer";
    }else if (mes == 7 && dia <= 22){
        simbolo = "Cancer";
    }else if (mes == 7 && dia >= 23){
        simbolo = "Leo";
    }else if (mes == 8 && dia <= 22){
        simbolo = "Leo";
    }else if (mes == 8 && dia >= 23){
        simbolo = "Virgo";
    }else if (mes == 9 && dia <= 22){
        simbolo = "Virgo";
    }else if (mes == 9 && dia >= 23){
        simbolo = "Libra";
    }else if (mes == 10 && dia <= 22){
        simbolo = "Libra";
    }else if (mes == 10 && dia >= 23){
        simbolo = "Escorpio";
    }else if (mes == 11 && dia <= 21){
        simbolo = "Escorpio";
    }else if (mes == 11 && dia >= 22){
        simbolo = "Sagitario";
    }else if (mes == 12 && dia <= 21){
        simbolo = "Sagitario";
    }else if (mes == 12 && dia >= 22){
        simbolo = "Capricornio";
    }
    return simbolo;
}
zodiac(20,5);