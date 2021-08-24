function msg(){
  var user = document.getElementById("name").value
  console.log(`Olá ${user}!`)
  window.alert(`Olá ${user}!`)
}

function somar(){
  var n1 = Number(document.getElementById("num10").value)
  var n2 = Number(document.getElementById("num11").value)
  var resultSoma = n1 + n2
  console.log (` O valor da soma foi = ${resultSoma}`)
  document.getElementById("valorSoma").value = resultSoma
}

function quadrado() {
  var n3 = Number(document.getElementById("num3").value)
  var resultQuad = n3 * n3
  console.log (` O valor da potenciação foi = ${resultQuad}`)
  document.getElementById("valorQuad").value = resultQuad
}

function dobro(){
  var n4 = Number(document.getElementById("num4").value)
  var resultDobro = n4 * 2
  console.log (` O valor da multiplicação foi = ${resultDobro}`)
  document.getElementById("valorDobro").value = resultDobro
}

function antDepois() {
  var n5 = Number(document.getElementById("num5").value)
  var antes = n5 - 1
  var depois = n5 + 1
  console.log (` O antecessor de ${n5} é ${antes} e o sucessor é ${depois}`)
  document.getElementById("antec").value = antes
  document.getElementById("suces").value = depois
}

function meses() {
  document.getElementById("dias").value = 7*30
}

function nota() {
  var nota1 = Number(document.getElementById("nota1").value)
  var nota2 = Number(document.getElementById("nota2").value)
  var nota3 = Number(document.getElementById("nota3").value)
  var nota4 = Number(document.getElementById("nota4").value)
  var nota5 = Number(document.getElementById("nota5").value)
  var media = (nota1+nota2+nota3+nota4+nota5)/5
  console.log (`A média foi = ${media}`)
  document.getElementById("mediaNotas").value = media
}

function medida() {
  var m = Number(document.getElementById("metro").value)
  var cm = m * 100
  console.log (`A medida em cm é = ${cm}`)
  document.getElementById("cm").value = cm
}

function desconto() {
  var prod = Number(document.getElementById("prod").value)
  var desc = Number(document.getElementById("desconto").value)
  valorDesc = (prod/100)*desc
  console.log (`O valor do desconto é = ${valorDesc}`)
  document.getElementById("valorDesconto").value = valorDesc
}

function soma(){
  var n6 = Number(document.getElementById("num6").value)
  var n7 = Number(document.getElementById("num7").value)
  var resultCalc = n6 + n7
  console.log (` O valor da soma foi = ${resultCalc}`)
  document.getElementById("valorCalc").value = resultCalc
}

function menos(){
  var n6 = Number(document.getElementById("num6").value)
  var n7 = Number(document.getElementById("num7").value)
  var resultCalc = n6 - n7
  console.log (` O valor da subtração foi = ${resultCalc}`)
  document.getElementById("valorCalc").value = resultCalc
}

function mult(){
  var n6 = Number(document.getElementById("num6").value)
  var n7 = Number(document.getElementById("num7").value)
  var resultCalc = n6 * n7
  console.log (` O valor da multiplicação foi = ${resultCalc}`)
  document.getElementById("valorCalc").value = resultCalc
}

function dividir(){
  var n6 = Number(document.getElementById("num6").value)
  var n7 = Number(document.getElementById("num7").value)
  var resultCalc = n6 / n7
  console.log (` O valor da divisão foi = ${resultCalc}`)
  document.getElementById("valorCalc").value = resultCalc
}

function idade() {
  var age = Number(document.getElementById("anos").value)


  if (age>=18){
    console.log ("Você é MAIOR DE IDADE")
    document.getElementById("age").value = "MAIOR DE IDADE"
  }
  else {
    console.log ("Você é MENOR DE IDADE")
    document.getElementById("age").value = "MENOR DE IDADE"
  }
}

function imparPar() {
  var n8 = Number(document.getElementById("num8").value)
  var n9 = n8 % 2 

  if (n9 == 0){
    console.log ("O número é par")
    document.getElementById("resutadoImpar").value = "Par"
  }
  else {
    console.log ("O número é ímpar")
    document.getElementById("resutadoImpar").value = "Ímpar"
  }
}

function imc() {
  var peso = Number(document.getElementById("massa").value)
  var h = Number(document.getElementById("altura").value)
  var imc = peso/(h*h)

  if (imc>=16 && imc<=16.9){
  console.log (`IMC = ${imc} - Muito abaixo do Peso`)
  document.getElementById("resultadoIMC").value = imc
  document.getElementById("classificacaoIMC").value = "Muito abaixo do Peso"
  } else if (imc>=17 && imc<=18.4){
  console.log (`IMC = ${imc} - Abaixo do Peso`)
  document.getElementById("resultadoIMC").value = imc
  document.getElementById("classificacaoIMC").value = "Abaixo do Peso"
  } else if (imc>=18,5 && imc<=24.9){
  console.log (`IMC = ${imc} - Peso Normal`)
  document.getElementById("resultadoIMC").value = imc
  document.getElementById("classificacaoIMC").value = "Peso Normal"
  }else if (imc>=25 && imc<=29.9){
  console.log (`IMC = ${imc} - Acima do peso`)
  document.getElementById("resultadoIMC").value = imc
  document.getElementById("classificacaoIMC").value = "Acima do peso"
  }else if (imc>=30 && imc<=34.9){
  console.log (`IMC = ${imc} - Obesidade Grau I`)
  document.getElementById("resultadoIMC").value = imc
  document.getElementById("classificacaoIMC").value = "Obesidade Grau I"
  }else if (imc>=35 && imc<=40){
  console.log (`IMC = ${imc} - Obesidade Grau II`)
  document.getElementById("resultadoIMC").value = imc
  document.getElementById("classificacaoIMC").value = "Obesidade Grau II"
  }else{
  console.log (`IMC = ${imc} - Obesidade Grau III`)
  document.getElementById("resultadoIMC").value = imc
  document.getElementById("classificacaoIMC").value = "Obesidade Grau III"
  }
}



