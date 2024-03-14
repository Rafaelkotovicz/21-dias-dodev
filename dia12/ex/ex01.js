let nomes = [];
let senhas = [];
let continuar = true;
let contador = 0;

while(continuar){

    let opcao = prompt('1-cadastrar, 2-login, 3-excluir cadastro, 4-finalizar');

    switch(opcao){
        case '1':
            nomes[contador] = prompt('Digite seu nome');
            senhas[contador] = prompt('Digite uma senha');
            contador++
            break;
        case '2':
           let nome = prompt('Digite seu nome');
           let senha = prompt('Digite sua senha');
           let loginValido = false;
    
            for(let i = 0; i < nomes.length; i++){
                if(nome == nomes[i] && senha == senhas[i]){
                    loginValido = true;
                }
            }
            if(loginValido == true){
                console.log('Login realizado com sucesso!');
            }else{
                console.log('Nome ou senha incorretos!');
            }
            break;
        case '3':
           let nomeExculir = prompt('Digite o nome que deseja excluir');
           let nomesAux = [];
           let senhasAux = [];
           let contadorAux = 0; 
            for(let i = 0; i < nomes.length; i++){
                if(nomeExculir == nomes[i]){
                    alert('Cadastro excluido!')
                }else{
                    nomesAux[contadorAux] = nomes[i];
                    senhasAux[contadorAux] = senhas[i];
                    contadorAux++;
                }
            }
            nomes = nomesAux;
            senhas = senhasAux;
            contador--;
            break;
        case '4':
            continuar = false;
            break;
        default:
            console.log('Erro!');
            break;
    }
}