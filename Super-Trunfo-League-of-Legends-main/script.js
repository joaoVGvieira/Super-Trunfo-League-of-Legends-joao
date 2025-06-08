var carta1 = {
  nome: "Jinx",
  img:
    "https://static.wikia.nocookie.net/leagueoflegends/images/3/3c/Jinx_OriginalLoading.jpg",
  tamanhoImagem: "width='80%' height='80%'",
  atributos: {
    poderdeataque: 10,
    armadura: 4,
    poderdehabilidade: 3,
    velocidade: 7
  }
};

var carta2 = {
  nome: "Nami",
  img:
    "https://static.wikia.nocookie.net/leagueoflegends/images/6/66/Nami_OriginalLoading.jpg",
  tamanhoImagem: "width='80%' height='80%'",
  atributos: {
    poderdeataque: 3,
    armadura: 5,
    poderdehabilidade: 9,
    velocidade: 7
  }
};

var carta3 = {
  nome: "Garen",
  img:
    "https://static.wikia.nocookie.net/leagueoflegends/images/8/87/Garen_OriginalLoading.jpg",
  tamanhoImagem: "width='80%' height='80%'",
  atributos: {
    poderdeataque: 7,
    armadura: 9,
    poderdehabilidade: 3,
    velocidade: 6
  }
};

var carta4 = {
  nome: "Lulu",
  img:
    "https://static.wikia.nocookie.net/leagueoflegends/images/3/31/Lulu_OriginalLoading.jpg",
  tamanhoImagem: "width='80%' height='80%'",
  atributos: {
    poderdeataque: 2,
    armadura: 7,
    poderdehabilidade: 9,
    velocidade: 8
  }
};

var carta5 = {
  nome: "Varus",
  img:
    "https://static.wikia.nocookie.net/leagueoflegends/images/8/86/Varus_OriginalLoading.jpg",
  tamanhoImagem: "width='80%' height='80%'",
  atributos: {
    poderdeataque: 7,
    armadura: 5,
    poderdehabilidade: 8,
    velocidade: 4
  }
};

var carta6 = {
  nome: "Yasuo",
  img:
    "https://static.wikia.nocookie.net/leagueoflegends/images/9/9f/Yasuo_OriginalLoading.jpg",
  tamanhoImagem: "width='80%' height='80%'",
  atributos: {
    poderdeataque: 10,
    armadura: 6,
    poderdehabilidade: 2,
    velocidade: 7
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina;
var cartaJogador;
//console.log(cartas);

//Para poder visualizar um registro dentro do objeto
//console.log(carta1.atributos.ataque);

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  //validar para que as cartas não sejam iguais
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];

  //Desabilitar botão sortear a habilitar o botão jogar
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("btnReset").disabled = false;
  exibirOpcoes();
  exibirCartaJogador();
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var seuCampeao = document.getElementById("seuCampeao");
  seuCampeao.innerHTML = "Seu campeão é " + cartaJogador.nome;
  let imagemJogador = document.getElementById("ladoEsquerdo");
  imagemJogador.innerHTML =
    "<img src=" + cartaJogador.img + " " + cartaJogador.tamanhoImagem + ">";
}

function exibirCartaMaquina() {
  var campeaoMaquina = document.getElementById("campeaoMaquina");
  campeaoMaquina.innerHTML = "O campeão adversário é " + cartaMaquina.nome;
  let imagemMaquina = document.getElementById("ladoDireito");
  imagemMaquina.innerHTML =
    "<img src=" + cartaMaquina.img + " " + cartaMaquina.tamanhoImagem + ">";
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input Type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Voce perdeu, a carta da máquina é maior";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
}

function Reiniciar() {
  var resetarOpcoes = document.getElementById("opcoes");
  resetarOpcoes.innerHTML = "";
  var resetarResultado = document.getElementById("resultado");
  resetarResultado.innerHTML = "";
  var resetarImagem = document.getElementById("cartaImagem");
  resetarImagem.innerHTML = "";
  var resetarCampeao = document.getElementById("seuCampeao");
  resetarCampeao.innerHTML = "";
  var resetarCampeaoMaquina = document.getElementById("campeaoMaquina");
  resetarCampeaoMaquina.innerHTML = "";
  var imagemEsquerda = document.getElementById("ladoEsquerdo");
  imagemEsquerda.innerHTML = "";
  var imagemDireita = document.getElementById("ladoDireito");
  imagemDireita.innerHTML = "";
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}