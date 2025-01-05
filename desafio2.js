let nivel;
let nome = "Sombra";
let vitorias = 101;
let derrotas = 0;
let saldoVitorias = vitorias - derrotas;

function determinarNivel() {
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
}

function exibirStatus() {
    determinarNivel();
    console.log("O(a) Herói(a) " + nome + " tem de saldo de " + saldoVitorias + " vitórias está no nível de " + nivel  + ".");
}

exibirStatus();
