let nome;
let salario;

function informacoes(){
     nome = prompt('Qual seu nome?');
     salario = Number(prompt('Qual seu salário?'));
     aumento(nome, salario);
}

function aumento(nome, salario){
    let ajuste;
    if(salario <= 1500){
        ajuste = 0.2;
    }else if (salario > 1500 || salario <= 2000){
        ajuste = 0.015;
    }else if(salario > 2000 || salario <= 3000){
        ajuste = 0.1;
    }else if(salario > 3000){
        ajuste = 0.05;
    }

    let novoSalario = salario + (salario * ajuste);
}

function novamente(){
    let continuar = true;

    while(continuar){
        let pergunta = prompt('Deseja preencher novamente?');
        if(pergunta == 's'){
            informacoes();
        }else{
            continuar = false;
        }
    }
}