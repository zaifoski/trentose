// contiene le ore identificate attraverso i nomi degli utenti
var accounts=[];
var points=[];
//variabile globale per attivare il modulo di un utente
var nomeG="";

function iAm(nome){
    if(accounts[nome]==undefined){
	accounts[nome]=0;
	points[nome]=0;
	nomeG=nome;
	return false;
    }
    else{
	nomeG=nome;
	return true;
    }
}

function give(hours){
    if(isNaN(hours)){
	return null;
    }
    else{
	accounts[nomeG]=accounts[nomeG]+hours;
	points[nomeG]=parseInt(accounts[nomeG]);
	return ""+accounts[nomeG];
    }
}

function getPoints(){
    return points[nomeG];
}