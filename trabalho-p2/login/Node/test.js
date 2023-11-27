// // testePagina.test.js
// const request = require('supertest');
// const app = require('./src/routes/mysql/routes'); // Substitua pelo caminho real do seu arquivo

// describe('Testes para a Página', () => {
//   it('Deve deletar um cliente', async () => {
//     const resposta = await request(app).delete('/clientes/1');
//     expect(resposta.status).toBe(204);
//   });

//   it('Deve atualizar o valor de pagamento de um cliente', async () => {
//     const resposta = await request(app)
//       .patch('/clientes/1')
//       .send({ pagamento: '30' });
//     expect(resposta.status).toBe(200);
//   });

//   it('Deve inserir um novo cliente', async () => {
//     const resposta = await request(app)
//       .post('/clientes')
//       .send({ nome : 'teste', senha : '8130', cpf: '13505064785', email : 'felipe8130@gmail.com', telefone : '81303930', endereco : 'xxx', cidade : 'xxx', estado : 'xxx', cep : 'xxx' });
//     expect(resposta.status).toBe(201);
//   });

//   it('Deve buscar um cliente por ID', async () => {
//     const resposta = await request(app).get('/clientes/1');
//     expect(resposta.status).toBe(200);
//   });

//   it('Deve buscar todos os clientes', async () => {
//     const resposta = await request(app).get('/clientes');
//     expect(resposta.status).toBe(200);
//   });

//   it('Deve realizar login com sucesso', async () => {
//     const resposta = await request(app)
//       .post('/login')
//       .send({ email: 'user@example.com', senha: 'password' });
//     expect(resposta.status).toBe(200);
//   });

//   it('Deve retornar status 401 para login inválido', async () => {
//     const resposta = await request(app)
//       .post('/login')
//       .send({ email: 'invalid@example.com', senha: 'invalidpassword' });
//     expect(resposta.status).toBe(401);
//   });

//   it('Deve retornar página de cadastro', async () => {
//     const resposta = await request(app).get('/cadastrar');
//     expect(resposta.status).toBe(200);
//   });

//   it('Deve retornar página logado quando logado', async () => {
//     const resposta = await request(app).get('/logado');
//     expect(resposta.status).toBe(200);
//   });

//   it('Deve redirecionar para /login ao fazer logout', async () => {
//     const resposta = await request(app).get('/logout');
//     expect(resposta.status).toBe(302); // 302 é o código de redirecionamento
//     expect(resposta.headers.location).toBe('/login');
//   });

//   it('Deve retornar JSON de teste', async () => {
//     const resposta = await request(app).get('/teste');
//     expect(resposta.status).toBe(200);
//     expect(resposta.body).toEqual([{ teste: 'teste' }]);
//   });
// });
