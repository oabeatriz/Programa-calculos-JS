// programa pra calcular salário de aposentadoria, regras:

// ter pelo menos 65 anos; ou ter trabalhado 30 anos; ou ter 60 anos e ter trabalhado pelo menos 25 anos;

// caso o tempo de serviço seja maior que 20 anos seu salário de aposentadoria poderá ser de até 80% do último salário recebido como trabalhador

// Caso o tempo de serviço seja menor ou igual a 20 anos, seu salário de aposentadoria poderá ser de até 60% do último salário recebido como trabalhador;

//O valor mínimo será de R$ 1212,00 e o valor máximo será de R$ 7087,22;





const prompt = require('prompt-sync')();

 
 
// Lê os dados do trabalhador
let idade = prompt("Qual é a sua idade?");
let tempoDeServico = prompt("Há quantos anos você trabalha?");
let salarioAtual = prompt("Qual é o seu salário atual?");

// Verifica se o trabalhador pode se aposentar
let podeAposentar = false;

if (idade >= 65 || tempoDeServico >= 30 || (idade >= 60 && tempoDeServico >= 25)) {
  podeAposentar = true;
}

// Calcula o valor da aposentadoria, se for possível
let aposentadoria = 0;

if (podeAposentar) {
  if (tempoDeServico > 20) {
    aposentadoria = salarioAtual * 0.8;
  } else {
    aposentadoria = salarioAtual * 0.6;
  }

  // Verifica se o valor da aposentadoria está dentro dos limites permitidos
  if (aposentadoria < 1212) {
    aposentadoria = 1212;
  } else if (aposentadoria > 7087.22) {
    aposentadoria = 7087.22;
  }
}

// Exibe a mensagem com o resultado
if (podeAposentar) {
  console.log("Parabéns! Você pode se aposentar.");
  console.log(`O salário de aposentadoria será ${aposentadoria} reais`);
} else {
  console.log("Infelizmente, você ainda não pode se aposentar.");
}




