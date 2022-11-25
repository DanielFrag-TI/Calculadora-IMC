const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit",(e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const feminino = frm.inFeminino.check
    const altura = Number(frm.inAltura.value)
    const peso = Number(frm.inPeso.value)


    let peso1

    if (feminino){
        peso1 = 21*Math.pow(altura,2)
    } else {
        peso1 = 22* Math.pow(altura,2)
    }

    const imc = peso / (altura * altura)


    resp.innerText = `${nome}, seu peso ideal é: ${peso1.toFixed(2)}`

    if(imc < 18.5){
        resp2.innerText= `Seu imc é : ${imc.toFixed(2)}. Você está abaixo do peso.`
    } else if(imc>18.4, imc<25 ){
        resp2.innerText= `Seu imc é : ${imc.toFixed(2)}. Você está no peso ideal.`
    } else if(imc>24.9, imc<30){
        resp2.innerText= `Seu imc é : ${imc.toFixed(2)}.Você está com excesso de peso.`
    } else if(imc>29.9, imc<35){
        resp2.innerText= `Seu imc é : ${imc.toFixed(2)}.Você está com obesidade de grau 1.`
    } else if (imc<34.9, imc<40){
        resp2.innerText= `Seu imc é : ${imc.toFixed(2)}.Você está com obesidade de grau 2.`
    } else{
        resp2.innerText= `Seu imc é : ${imc.toFixed(2)}.Você está com obesidade de grau 3.`
    }

    

})