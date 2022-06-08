const checknumber = num =>{

    num = parseFloat(num)
    return 
    if(!num || NaN){
        return 0;
    }else{
        return num;
    }
}

const soma = (number1, number2) =>{
    return number1 + number2;
}

document.getElementById("button").addEventListener("click",()=>{
    const num11 = document.getElementById("onenumber");
    const num12 = document.getElementById("twonumber");
    const res1 = document.getElementById ("resposta1");
    res1.innerHTML = soma(parseFloat(num11.value),parseFloat(num12.value))
 

}) 

const maiornumero =(number3, number4) =>{
    if (number3 > number4){
        return 'O primeiro número é maior'
    }
    else{ return'O segundo é o maior'
}   
}

document.getElementById("button2").addEventListener("click",()=>{
    const num13 = document.getElementById("umnumero");
    const num14 = document.getElementById("doisnumero");
    const res2 = document.getElementById ("resposta2");
    res2.innerHTML = maiornumero(parseFloat(num13.value),parseFloat(num14.value))
 

})

const primo =(number12)=>{
    if( number12 <= 1){
    return 'não é primo'
    }
    for(let i=2; i < number12; i++){
        if(number12 % i == 0){
            return 'o numero não é primo'
        }
    }
    return'o numero é primo'
}

document.getElementById("button8").addEventListener("click",()=>{
    const num22 = document.getElementById("deznumero");
    const res8 = document.getElementById ("resposta8");
    res8.innerHTML = primo(parseFloat(num22.value))
})

const cateto =(number5, number6) =>{
    let resultado = number5 * number5 + number6 * number6
    return resultado * resultado
}

document.getElementById("button3").addEventListener("click",()=>{
    const num15 = document.getElementById("tresnumero");
    const num16 = document.getElementById("quatronumero");
    const res4 = document.getElementById ("resposta4");
    res4.innerHTML = cateto(parseFloat(num15.value),parseFloat(num16.value))

})

const salario =(number7)=>{
    if( number7 < 0 ){
        return'o número é negativo'
    }
    let porcentagem
    porcentagem = number7 * 0.10
    return number7 + porcentagem
}

document.getElementById("button5").addEventListener("click",()=>{
    const num17 = document.getElementById("cinconumero");
    const res5 = document.getElementById ("resposta5");
    res5.innerHTML = salario(parseFloat(num17.value))
})

const converter =(number8) =>{
    return (number8 - 32) / 1.8

}

document.getElementById("button6").addEventListener("click",()=>{
    const num18 = document.getElementById("seisnumero");
    const res6 = document.getElementById ("resposta6");
    res6.innerHTML = converter(parseFloat(num18.value))
})

const media =(number9, number10, number11)=>{
    return (number9 * 2 + number10 *3 +number11 * 5 ) / 10
}

document.getElementById("button7").addEventListener("click",()=>{
    const num19 = document.getElementById("setenumero");
    const num20 = document.getElementById("oitonumero");
    const num21 = document.getElementById("novenumero");
    const res7 = document.getElementById ("resposta7");
    res7.innerHTML = media(parseFloat(num19.value),parseFloat(num20.value),parseFloat(num21.value))
})