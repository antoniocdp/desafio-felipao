let nivel;
let nome = "Escuridão";
let vitorias =2000;
let derrotas = 100;
let saldoVitorias = vitorias - derrotas;
  
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
	} else { (vitorias >= 101)
	  nivel = "Imortal";
	}
  
	console.log("O(a) Herói(a) " + nome + " tem de saldo de " + saldoVitorias + " vitórias está no nível de " + nivel + ".");
