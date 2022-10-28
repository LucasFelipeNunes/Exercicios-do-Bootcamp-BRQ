var filmes = [
    {
        "id": 1,
        "title": "Die Hard",
        "valor": 12.00,
        "rating": 5.0
    },
    {
        "id": 2,
        "title": "Homem Aranha 1",
        "valor": 8.00,
        "rating": 4.0
    },
    {
        "id": 3,
        "title": "Homem de ferro",
        "valor": 7.00,
        "rating": 3.0
    },
    {
        "id": 4,
        "title": "Die Hard",
        "valor": 13.00,
        "rating": 5.0
    }
];
console.log(`A. Valores com 10% de desconto: ${filmes.map(filme => filme.valor * 0.9)}\n`)
console.log(`B. Valores maiores que 10,00: ${filmes.filter(filme => filme.valor > 10)}\nC. Média dos valores menores que 10: ${filmes.map(filme => filme.valor < 10).reduce((acumulador, filme) => acumulador + filme.valor)}`)