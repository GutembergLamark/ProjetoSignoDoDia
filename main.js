import entrada from 'readline-sync';

import colecao_signos from './dados/dados.js';
import retorna_signo from './funcoes/funcoes.js'

data_app = new Date(entrada.question("Informe a Data: "));

data_app = new Date(data_app.setDate(data_app.getDate() + 1));

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);