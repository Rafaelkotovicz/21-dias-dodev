let nome;
let salario;

function informacoes(){
     nome = prompt('Qual seu nome?');
     salario = Number(prompt('Qual seu salário?'));
     aumento(nome, salario);
}

function aumento(nome, salario){
    if(salario <= 1500){
        console.log('Aumento de 20%: ' + (salario * 0.2));
    }else if (salario > 1500 || salario <= 2000){
        console.log('Aumento de 15%: ' + (salario * 0.15));
    }else if(salario > 2000 || salario <= 3000){
        console.log('Aumento de 10%' + (salario * 0.1));
    }else if(salario > 3000){
        console.log('Aumento de 5%: ' + (salario * 0.05));
    }
}