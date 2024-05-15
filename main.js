
for (let i = 1; i <= 100; i++){
    /*per esprimere se un numero è divisibile per unaltro viene scritto (a % b =0) 
    perche un numero è divisibile per unaltro quando il risultato è intero.*/

if (i % 3 ===0 && i % 5 === 0){     //tutte le volte che un numero da 1 a 100 (i) è divisibile per 3 o 5... 
    console.log("fizzBuzz");             // questa operazione verra eseguita solo se entrambe le dichiarazioni sono vere. 
}
    else if ( i % 3 === 0){
        console.log("Fizz");
    }
    else if ( i % 5 === 0){
        console.log("Buzz");
    }
    else (console.log(i));     
}