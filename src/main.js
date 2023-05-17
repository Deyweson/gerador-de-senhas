let caracteres = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','l','k','m','n','o','p','q','r','s','t','u','v','x','z','0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','X','W','Z','0','1','2','3','4','5','6','7','8','9'];

let apenasNumeros = ['0','1','2','3','4','5','6','7','8','9'];

let apenasLetras = ['a','b','c','d','e','f','g','h','i','j','l','k','m','n','o','p','q','r','s','t','u','v','x','z','A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','X','W','Z'];

let senha = '';

function random(max){
    return Math.floor(Math.random() * max);
}

 function novaSenha(){

    let Tamanho = document.getElementById("len");
    let tamanhoSenha =  parseInt(Tamanho.value);
    let senhaOpcao = document.getElementById("tipoSenha").value;

    senha = '';
    
    if (senhaOpcao === 'letras'){
        for (let i = 0; i < tamanhoSenha; i++) {
            let letra = apenasLetras[random(48)];
            senha = senha + letra;
        }
    } else if (senhaOpcao == 'num'){
        for (let i = 0; i < tamanhoSenha; i++) {
            let letra = apenasNumeros[random(10)];
            senha = senha + letra;
        }
    } else if('caracteres') {
        for (let i = 0; i < tamanhoSenha; i++) {
            let letra = caracteres[random(78)];
            senha = senha + letra;
        }
    }

    if (tamanhoSenha > 20){
        document.querySelector("#senha").innerHTML = ``;
    } else {
        document.querySelector("#senha").innerHTML = `${senha}`;
    }

 }
 