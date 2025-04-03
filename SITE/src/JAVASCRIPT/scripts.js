listaJogos = ["The Witcher 3", "Minecraft", "GTA V", "Dark Souls 3", "League of Legends", "Counter Strike 2", "Red Dead Redemption 2", "Fifa 25", "Stardew Valley", "Hollow Knight"];

listaRecomendada = ["", "", "", "", ""];

console.log(listaRecomendada);

for(let i = 0; i <= 4; i++){
    listaRecomendada[i] = listaJogos[Math.floor(Math.random() * listaJogos.length)]
    console.log(`Loop ${i} - ${listaRecomendada[i]}`);
}

console.log(listaRecomendada);
