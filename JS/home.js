function rollDice1(){
	var die1 = document.getElementById("die1");
	var d1 = Math.floor(Math.random() * 4) + 1;
	die1.innerHTML = d1;
}
function rollDice2(){
	var die2 = document.getElementById("die2");
	var d2 = Math.floor(Math.random() * 6) + 1;
	die2.innerHTML = d2;
}
function rollDice3(){
	var die3 = document.getElementById("die3");
	var d3 = Math.floor(Math.random() * 8) + 1;
	die3.innerHTML = d3;
}
function rollDice4(){
	var die4 = document.getElementById("die4");
	var d4 = Math.floor(Math.random() * 10) + 1;
	die4.innerHTML = d4;
}
function rollDice5(){
	var die5 = document.getElementById("die5");
	var d5 = Math.floor(Math.random() * 12) + 1;
	die5.innerHTML = d5;
}
function rollDice6(){
	var die6 = document.getElementById("die6");
	var d6 = Math.floor(Math.random() * 20) + 1;
	die6.innerHTML = d6;
}
