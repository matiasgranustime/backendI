
const express = require("express");
const app = express();
const port = 3000;

// Rota 1: Página inicial
app.get("/", (req, res) => {
    res.send("Bem-vindo à página inicial!");
});

// Rota 2: Página sobre
app.get("/sobre", (req, res) => {
    res.send("Esta é a minha página Sobre!");
});

app.get("/inicio",(req,res) => {
    res.send ("Oii Matias eu sou a terceira rota que voce criou usando o /inicio");

});
app.get("/nova",(req,res) => {
    res.send ("Essa é a quarta rota criada, mas ainda não sei pra que serve");
});
app.get("/marvel",(req,res) => {
    res.send ("Hulk, Dr. Estranho, Homen de Ferro ou Iron Maden");
});

app.get("/dc/melheres",(req,res) => {
    res.send ("Mulher Maravilha, Bateeeeeeeee Girl");
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
