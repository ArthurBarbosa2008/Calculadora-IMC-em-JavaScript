let altura = document.getElementById("altura")
let peso = document.getElementById("peso")
let resultado = document.getElementById("resultado")
let analise = ""

function calcular(){
    if (peso.value <= 0 || altura.value <= 0) {
        analise = "Valores inválidos"
        resultado.textContent = analise
    } else {
        let total = Number(peso.value)/(Number(altura.value) ** 2)

        if (total <= 18.5 && total > 0) {
            analise = "(Magreza)"
        } else if (total >= 18.5 && total < 25) {
            analise = "(Peso normal)"
        } else if (total >= 25 && total < 30) {
            analise = "(Sobrepeso)"
        } else if (total >= 30) {
            analise = "(Obesidade)"
        } 
        resultado.textContent = total.toFixed(2) + " " + analise
    }

}