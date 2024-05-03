let stamp = document.querySelector("h1");
let num = [];
let userNum = [];
//FUNZIONE PER GENERARE 5 NUMERI RANDOM E INSERIRLI IN UN ARRAY
function generateNum() {
    for (let x = 1; x <=5 ; x++) {
        let random = Math.floor(Math.random() * (9 - 1) + 1);
        num.push(random);
    }
}

let gen = generateNum();
console.log(num)
// FUNZIONE PER CHIEDERE 5 NUMERI ALL'UTENTE ED INSERIRLI IN UN ALTRO ARRAY
function userNumInput() {
    for (let x = 1; x <= 5; x++) {
       let user = parseInt(prompt(`Inserisci numero che hai visto`));
       userNum.push(user);
    }
}
let user = userNumInput();
console.log(userNum)

// ciclo per cconfronto dei due array
let pos;
let i = num.length - 1
while(i <= num.length){
    pos = userNum[i];
    i++;
    console.log(pos)
}
if (userNum[i] == num[i]){
    console.log("corretto")
}else {
    console.log("errato")
}