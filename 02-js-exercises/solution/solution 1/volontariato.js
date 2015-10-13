/* 
ESERCIZIO entro domenica:
Questa libreria definisce l’interfaccia che permette di     avere traccia delle ore di volontariato e calcolare i punti (“rewards”) che deve prendere ogni utente.
*/
var volontariato = [];
var currentName; //se nome non valido, undefined
/*
Permette di inizializzare il modulo per un utente. Se l’utente non esiste, si crea un nuovo account con 0 punti.
Restituisce false se l’utente e’ nuovo, true se gia’ esiste.
*/
function iAm(name){
    currentName = name;
    if(volontariato[currentName] == undefined){
        volontariato[currentName] = 0;
        return false;
    }
    return true;
}
/*
Riceve in input le ore di volontariato (numero positivo), e restituisce il totale accumulato. Se l’input e’ invalido (stringa o numero negativo) restituisce null.
*/
function give(hours){
    if(isNaN(hours) || hours < 0){
        return null;
    }
    if(currentName == undefined){
        return undefined;
    }
    volontariato[currentName] += hours;
    return volontariato[currentName];
}
/*
Restituisce il totale dei punti fatti secondo le ore di volontariato. Il sistema fornisce un punto per ogni ora di volontariato.
*/
function getPoints(){
    if(currentName == undefined){
        return undefined;
    }
    return parseInt(volontariato[currentName]);
}

/*
Example of use:

iAm(“earl”) 

> false

Kind.give(0.5)

> 0.5 

getPoints() 

> 0 

give(0.8)

> 1.3 

getPoints() 

> 1

*/