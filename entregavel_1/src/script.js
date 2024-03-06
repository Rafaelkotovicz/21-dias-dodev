///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!

function calculadora(num1, num2, operador){

let resulado;
let n1 = Number(num1);
let n2 = Number(num2);

  switch(operador){
    case '+':
     resulado = n1 + n2
     break;
    case '-':
      resulado = n1 - n2
      break;
    case '*':
      resulado = n1 * n2
      break;
    case '/':
      resulado = n1 / n2
      break;
    case 'e':
      let contador = 1;
      resulado = n1 * n1
      while(contador < n2 - 1){
        resulado = resulado * n1
        contador++
      }
      break;
  }
  if(resulado == undefined || resulado > 1000000){
    resulado = 'Erro'
    return resulado
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}