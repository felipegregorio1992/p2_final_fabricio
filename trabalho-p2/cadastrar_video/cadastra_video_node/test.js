// // test/liveRoutes.test.js
// const request = require('supertest');
// const express = require('express');
// const mongoose = require('mongoose');
// const Lives = require('./src/db/mongo/mongodb');
// const liveRoutes = require('./src/routes/routes');

// const app = express();
// app.use(express.json());

// beforeAll(async () => {
//   // Conectar ao banco de dados de teste (pode ser um banco de dados diferente do de produção)
//   await mongoose.connect('mongodb+srv://felipegregoriotesteemail:w56T6zzH8dOc6LGE@cluster0.uojqmrv.mongodb.net/seu-banco-de-dados', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   // Limpar o banco de dados antes de cada execução do teste
//   await Lives.deleteMany({});
// });

// afterAll(async () => {
//   // Desconectar do banco de dados de teste após todos os testes
//   await mongoose.disconnect();
// });

// describe('Testes para Rotas de Lives', () => {
//   it('Deve inserir uma nova live com sucesso', async () => {
//     const respostaCadastro = await request(app)
//       .post('/logado')
//       .send({
//         nome: 'Live 1',
//         data: '2023-12-01',
//         categoria: 'Categoria da Live',
//         descricao: 'Descrição da Live',
//         link: 'https://www.example.com/live'
//       });

//      // Espera um redirecionamento após o cadastro
//     // Adicione mais asserções conforme necessário para validar a resposta
//   });

//   it('Deve retornar alguma coisa na busca de lives', async () => {
//     // Faça uma busca sem adicionar lives ao banco de dados
//     const respostaBusca = await request(app).get('/buscarlives');


//     expect(respostaBusca.status).toBe(200);
//     expect(Array.isArray(respostaBusca.body)).toBe(true);
//     expect(respostaBusca.body.length).toBeGreaterThan(0);
//   });
  
//   // Adicione mais testes conforme necessário
// });
