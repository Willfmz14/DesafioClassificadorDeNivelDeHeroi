let nomeDoHeroi = prompt("Qual é o nome do seu herói? ")
let exp = prompt("Qual a quantidade de experiencia que seu herói tem? ")
let titulo;
if (exp >= 0 && exp <= 1000) {
    titulo = "Ferro"
}
else if (exp >= 1001 && exp <= 2000) {
    titulo = "Bronze"
}
else if (exp >= 2001 && exp <= 5000) {
    titulo = "Prata"
}
else if (exp >= 5001 && exp <= 7000) {
    titulo = "Ouro"
}
else if (exp >= 7001 && exp <= 8000) {
    titulo = "Platina"
}
else if (exp >= 8001 && exp <= 9000) {
    titulo = "Ascendente"
}
else if (exp >= 9001 && exp <= 10000) {
    titulo = "Imortal"
}
else if (exp >= 10001) {
    titulo = "Radiante"
}
console.log("O Héroi de nome " + nomeDoHeroi + " está no nível de " + titulo + ".")
