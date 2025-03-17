//Esse é um exemplo de implementação da logica do site.

const jogos = [
    { nome: "Dark Souls", genero: ["RPG", "Ação"], multiplayer: false, dificuldade: 5 },
    { nome: "Elden Ring", genero: ["RPG", "Ação", "Mundo Aberto"], multiplayer: true, dificuldade: 4 },
    { nome: "The Witcher 3", genero: ["RPG", "Ação", "Mundo Aberto"], multiplayer: false, dificuldade: 3 },
    { nome: "Bloodborne", genero: ["RPG", "Ação"], multiplayer: true, dificuldade: 5 }
];

function jaccardSimilarity(jogo1, jogo2) {
    let set1 = new Set(jogo1.genero);
    let set2 = new Set(jogo2.genero);
    let intersecao = new Set([...set1].filter(x => set2.has(x))).size;
    let uniao = new Set([...set1, ...set2]).size;
    return intersecao / uniao;
}

function recomendar(jogoEscolhido) {
    let jogoBase = jogos.find(j => j.nome === jogoEscolhido);
    let recomendacoes = jogos
        .filter(j => j.nome !== jogoEscolhido)
        .map(j => ({
            nome: j.nome,
            similaridade: jaccardSimilarity(jogoBase, j)
        }))
        .sort((a, b) => b.similaridade - a.similaridade);
    
    return recomendacoes.slice(0, 3); // Retorna os 3 jogos mais similares
}

console.log(recomendar("Dark Souls"));
