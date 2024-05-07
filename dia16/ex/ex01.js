let nomes = [];
let senhas = [];

function opcoes (){
    let opcao = prompt("Escolha a opção desejada: \n 1-Novo cadastro \n 2-Fazer login \n 3-Excluir um cadastro \n 4-Finalizar programa");
}

function cadastrar(){
    nomes.push(prompt("Digite seu nome"));
    senhas.push(prompt("Digite uma senha"));
    console.log("Cadastro realizado")
}

function login(nome, senha){
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha){
        console.log("Login realizado");
    }else{
        console.log("Erro!, nome ou senha inválidos");
    }
}

function excluirCadastro(nome){
    let indice = nomes.indexOf(nome);
    if(indice !== -1){
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Cadastro excluído com sucesso!");
    }else{
        console.log("Usuário não encontrado!");
    }
}

let continuar = true;

while(continuar){
    let escolha = opcoes();

    switch(escolha){
        case "1":
            cadastrar();
            break;
        case "2":
            let nome = prompt("Digite seu nome");
            let senha = prompt("Digite uma senha");
            let login = login(nome, senha);
            if(login){
                console.log("login realizado com sucesso");
            }else{
                console.log("nome ou senha incorretos")
            }
            break;
        case "3":
             nome = prompt("Digite seu nome");
            excluirCadastro(nome);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opção inválida");
            break;
    }
}