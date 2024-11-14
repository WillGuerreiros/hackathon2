

export default function RandomNumberInt() {
    // Gera um número aleatório entre 0 (inclusive) e 10 (exclusivo)
    // Arredonda para baixo para obter um número inteiro
    return Math.floor(Math.random() * 10) + 1;
  }
  