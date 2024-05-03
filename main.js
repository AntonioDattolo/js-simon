let stamp = document.querySelector("h1");
let num = [];
let userNum = [];
let  res ;
let gen = generateNum();
function generateNum() {
    for (let x = 1; x <=5 ; x++) {
        let random = Math.floor(Math.random() * (9 - 1) + 1);
        num.push(random);
    }
    stamp.innerText = num;

}

let y = setTimeout(function star(){
    stamp.innerText="";

},2000)



console.log(num)
// FUNZIONE PER CHIEDERE 5 NUMERI ALL'UTENTE ED INSERIRLI IN UN ALTRO ARRAY
let z = setInterval(userNumInput,2300);
function userNumInput() {
    if(userNum.length < 5){
        for(let x = 1; x <= 5; x++) {
        let user = prompt(`Inserisci numero che hai visto`);
        userNum.push(user);
        console.log( `il numero inserito è ${user}`)
        res  = document.createElement("h5");
        }
    }
    
    check();
}  












// ciclo per cconfronto dei due array
function check(){
    let x = num.length -1
    while(x >= 0){
        user = userNum[x];
        console.log(user)
        x--
        if(num[x] == userNum[x]){
            console.log("corretto")
            
            res.classList.add("true")
            stamp.append(res);
            res.innerText=`  ${user}`;
                
        }else{
            console.log("errato")
            
            res.classList.add("false")
            stamp.append(res);
            res.innerText=`  ${user}`;
        }
        
    }  
    clearInterval(z)   
}