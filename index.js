
const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
const file_path = `${__dirname}/produtos.json`;

app.get("/gerador", (req, res) => {
   var nomes = []
   var fp = fs.readFileSync('jogadores.json', "utf8");
   
   var jogadores = JSON.parse(fp);

   const nome = jogadores.nome[Math.floor(Math.random() * jogadores.nome.length)];
   const sobrenome = jogadores.sobrenome[Math.floor(Math.random() * jogadores.sobrenome.length)];
   const idade = jogadores.idade[Math.floor(Math.random() * jogadores.idade.length)];
   const posicao = jogadores.posicao[Math.floor(Math.random() * jogadores.posicao.length)];
   const clube = jogadores.clube[Math.floor(Math.random() * jogadores.clube.length)];

   res.send({content: nome + " " + sobrenome + " é um futebolista brasileiro de " + idade + " anos que atua como " + posicao + ". Atualmente defende o " + clube + "."});

});

app.listen(3000);