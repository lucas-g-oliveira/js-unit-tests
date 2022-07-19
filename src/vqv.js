/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (n, i) => {
  if (n === undefined || i === undefined) return undefined;
  let resultado = `Oi, meu nome é ${n}!\nTenho ${i} anos,`;
  resultado += '\ntrabalho na Trybe e mando muito em programação!\n#VQV!';
  return resultado;
};

module.exports = vqv;
