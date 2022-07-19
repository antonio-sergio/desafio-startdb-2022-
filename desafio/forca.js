let resultadoParcial = [];
let todasLetrasChutadas = [];
let palavraAtual = "";
let vidasJogador = 6;


class Forca {
  constructor(palavra) {
    palavraAtual = palavra;
    for (var i = 0; i < palavra.length; i++) {
      resultadoParcial.push("_");
    }
  }


  chutar(letra) {
    if (letra !== "" && letra.length === 1) {
      if (!palavraAtual.includes(letra) && !todasLetrasChutadas.includes(letra)) {
        vidasJogador--;
      }
      if (!todasLetrasChutadas.includes(letra)) todasLetrasChutadas.push(letra);
      for (var i = 0; i < palavraAtual.length; i++) {
        if (palavraAtual[i] === letra) {
          resultadoParcial[i] = letra;
        }
      }
    }
  }

  buscarEstado() {
    if (vidasJogador === 0) {
      return "perdeu";
    } else if (palavraAtual === resultadoParcial.join("")) {
      return "ganhou";
    } else return "aguardando chute"
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: todasLetrasChutadas, // Deve conter todas as letras chutadas
      vidas: vidasJogador, // Quantidade de vidas restantes
      palavra: resultadoParcial// Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
