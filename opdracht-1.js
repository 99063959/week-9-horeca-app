const fris = 1;
const bier = 2;
const wijn = 3;
const bitterbal8 = 5;
const bitterbal16 = 8;

var aantalfris = 0;
var aantalbier = 0;
var aantalwijn = 0;
var schaal8 = 0;
var schaal16 = 0;
var bestelling;
var aantal1;
var aantal2;
var aantal3;
var aantal4;

function bestellen(){

	while(bestelling != "stop"){

		bestelling = prompt("wilt uw fris, bier, wijn of een snack bestellen?");

		if(bestelling == "fris"){
			aantal1 = parseInt(prompt("hoeveel fris wilt uw?"));

			aantalfris = aantalfris + aantal1;
		}

		if(bestelling == "bier"){
			aantal2 = parseInt(prompt("hoeveel bier wilt uw?"));

			aantalbier = aantalbier + aantal2;
		}

		if(bestelling == "wijn"){
			aantal3 = parseInt(prompt("hoeveel wijn wilt uw?"));

			aantalwijn = aantalwijn + aantal3;
		}	
		
		if(bestelling == "snack"){
			aantal4 = parseInt(prompt("wilt uw een schaal van 8 of 16 bitterballen?"));

			if(aantal4 == "8"){
				schaal8 = schaal8 +1;
			}

			if(aantal4 == "16"){
				schaal16 = schaal16 +1;
			}
		}	
	}
}

bestellen();

function totaalkosten(){

	document.write("aantalfris besteld = " + aantalfris + "<br>" + "totaalkosten = " + (fris * aantalfris) + "<br>");
	document.write("aantalbier besteld = " + aantalbier + "<br>" + "totaalkosten = " + (bier * aantalbier) + "<br>");
	document.write("aantalwijn besteld = " + aantalwijn + "<br>" + "totaalkosten = " + (wijn * aantalwijn) + "<br>");
	document.write("aantal 8 bitterballen besteld = " + schaal8 + "<br>" + "totaalkosten = " + (bitterbal8 * schaal8 ) + "<br>");
	document.write("aantal 16 bitterballen besteld = " + schaal16 + "<br>" + "totaalkosten = " + (bitterbal16 * schaal16 ) + "<br>");
}

totaalkosten();