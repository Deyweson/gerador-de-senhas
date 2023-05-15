let caracteres = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','l','k','m','n','o','p','q','r','s','t','u','v','x','z','0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','L','M','N','O','P','Q','R','S','T','U','V','X','W','Z','0','1','2','3','4','5','6','7','8','9'];
let senha = '';

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 10; i++) {
    let letra = caracteres[getRandomInt(78)];
    senha = senha + letra
}

console.log(senha);