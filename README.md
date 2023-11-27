# p2_final_fabricio

      Sem docker
    • Baixar o documento compactado do trabalho.
    • Descompactar o arquivo.
    • Abrir cada projeto e executar na raiz o comando npm install.
    • Depois de instalado executar o comando npm start. 
    • É necessário executar todos os projetos para uma experiência completa do trabalho.
    • É necessário não ter nenhuma outra tarefa sendo executada nas portas do projeto.




Com o docker 
    • Executar o comando docker compose up na primeira pasta onde tem o arquivo do docker 


    DDD (Domain-Driven Design)

Parte do Usuário:
Comportamento Geral do Usuário:
Histórico de Transações:

Requisito: Manter um histórico detalhado das transações do usuário.
Benefício: Permite que os usuários revisem seu histórico de transações e entendam como seu saldo foi modificado ao longo do tempo.

Autenticação e Autorização:

Requisito: Implementar um sistema robusto de autenticação e autorização para garantir que apenas usuários autorizados possam acessar e editar informações.

Gerenciamento de Conta:

Comportamento: Permitir que os usuários atualizem suas informações pessoais, como nome, senha e métodos de pagamento.




Assinatura:

Assinatura de Conteúdo:

Requisito: Se houver um modelo de assinatura, considere como isso afeta o acesso a vídeos e as transações associadas.

Renovação Automática de Assinatura:

Requisito: Se aplicável, considere a implementação de renovação automática de assinaturas para usuários pagantes.
Parte do Vídeo:
Controle de Qualidade:
Moderação de Conteúdo:

Requisito: Implementar um processo de moderação de conteúdo para garantir que os vídeos atendam aos padrões estabelecidos antes de serem publicados.

Controle de Versão:

Requisito: Se permitir edições posteriores à publicação, implementar um sistema de controle de versão para rastrear e reverter alterações, se necessário.
Relacionamento com Usuários Pagantes:
Feedback de Usuários Pagantes:

Comportamento: Permitir que usuários pagantes forneçam feedback sobre os vídeos.
Benefício: Pode influenciar futuras edições e melhorias no conteúdo.
Notificações de Atualizações de Conteúdo:

Comportamento: Notificar usuários pagantes sobre novos vídeos ou atualizações em vídeos existentes.
Integração com Edição de Vídeo:
Controle de Acesso na Edição:

Requisito: Garantir que apenas usuários autorizados possam editar vídeos, considerando as permissões.

Registro de Eventos:

Requisito: Manter um registro de eventos, incluindo edições de vídeo e transações relacionadas ao pagamento.

Notificações de Edição:

Comportamento: Notificar usuários pagantes sobre edições em vídeos que possam afetar a qualidade ou conteúdo.








Tecnologia utilizada 
React (Frontend):
Componentização e Reatividade:

Motivo: React utiliza uma arquitetura de componentes, permitindo a construção modular da interface do usuário.

Motivo: React possui uma comunidade robusta e ativa, o que significa fácil acesso a bibliotecas externas, suporte e atualizações frequentes.
JSX:

Motivo: JSX, a extensão de sintaxe usada com React, oferece uma maneira declarativa e eficiente de descrever a estrutura do componente, integrando HTML com JavaScript.

Reutilização de Componentes:

Motivo: A reutilização de componentes em diferentes partes do aplicativo facilita a manutenção e melhora a consistência da interface do usuário.
Node.js (Backend):

JavaScript Full Stack:

Motivo: Com Node.js no backend e React no frontend, pode usar JavaScript em todo o projeto, proporcionando uma experiência de desenvolvimento mais unificada.



Eficiência e Desempenho:

Motivo: Node.js é conhecido por sua eficiência e desempenho, especialmente em operações de I/O intensivas, tornando-o adequado para sistemas em tempo real e aplicações escaláveis.
Ecossistema NPM:

Motivo: O Node Package Manager (NPM) é um grande repositório de bibliotecas e módulos, oferecendo uma variedade de pacotes prontos para uso e fácil integração.
Modelo de Eventos Não Bloqueantes:

Motivo: A arquitetura não bloqueante de Node.js permite que o servidor manipule várias conexões simultaneamente, o que é crucial para aplicativos que precisam lidar com um grande número de solicitações concorrentes.

Escalabilidade:

Motivo: Node.js é escalável horizontalmente, permitindo fácil dimensionamento em várias instâncias para lidar com um grande número de solicitações.

Axios:

Descrição: Axios é uma biblioteca JavaScript usada para fazer requisições HTTP. É amplamente utilizada no desenvolvimento frontend para interagir com APIs. 
Oferece uma interface amigável para realizar solicitações HTTP assíncronas.



CORS (Cross-Origin Resource Sharing):

Descrição: CORS é um mecanismo de segurança que controla como os recursos web em uma página web podem ser solicitados a partir de um domínio diferente do domínio que serviu a própria página. 
É uma política implementada nos navegadores para evitar ataques de solicitação entre origens não autorizadas.

3. Dotenv:

Descrição: Dotenv é uma biblioteca que permite carregar variáveis de ambiente a partir de um arquivo .env. Isso é útil para configurar diferentes ambientes (como desenvolvimento, teste e produção)
sem a necessidade de modificar diretamente o código-fonte.

4. Express:

Descrição: Express é um framework web para Node.js que simplifica o desenvolvimento de aplicativos web e APIs. Ele fornece uma abstração sobre a manipulação de rotas, middleware para processar 
solicitações e respostas, e várias funcionalidades para o desenvolvimento eficiente.

5. Jsonwebtoken:

Descrição: Jsonwebtoken é uma biblioteca para geração e verificação de tokens JWT (JSON Web Tokens). Esses tokens são frequentemente usados para autenticação e autorização em aplicações web.



6. Mongoose:

Descrição: Mongoose é uma biblioteca para modelagem de objetos MongoDB para Node.js. Ela fornece uma camada de abstração sobre as operações do MongoDB, 
permitindo que os desenvolvedores interajam com o banco de dados usando um esquema mais consistente e orientado a objetos.

7. MySQL2:

Descrição: MySQL2 é um driver MySQL para Node.js. Ele permite a comunicação eficiente entre uma aplicação Node.js e um banco de dados MySQL. 
É usado para realizar operações de leitura e gravação no banco de dados MySQL.

8. Jest:

Descrição: Jest é um framework de teste para JavaScript. É amplamente utilizado para testes unitários, testes de integração e testes de ponta a ponta. 
Jest oferece uma configuração fácil e uma ampla variedade de funcionalidades para facilitar o processo de teste.

9. Supertest:

Descrição: Supertest é uma biblioteca para testes de API HTTP. Ela é frequentemente usada em conjunto com Jest para realizar testes de integração em APIs construídas com frameworks como Express. 
Supertest simplifica a escrita de testes e a realização de solicitações HTTP para verificar o comportamento da API.



Arquitetura 

Modularidade e Escalabilidade:

Aplicação ao Projeto: A modularidade permitirá o desenvolvimento independente de diferentes módulos, como a área do usuário, área de pagamento e área do administrador. 
Cada módulo pode ser escalado separadamente conforme necessário.

Modularidade e Independência:

O projeto tem diferentes módulos ou serviços, como a área do usuário, área de pagamento, área de administrador e controle de vídeos. 
Esses módulos podem operar de forma independente, o que é uma característica comum em arquiteturas de microsserviços.

Desenvolvimento Independente:

A capacidade de equipes trabalharem de forma independente em diferentes partes do sistema sugere a presença de microsserviços. 
Cada equipe pode focar em um serviço específico, permitindo um desenvolvimento mais rápido e paralelo.

Escalabilidade Independente:

A possibilidade de escalar módulos ou serviços de forma independente, como a área de vídeos, área de pagamento e autenticação de usuários, é uma característica típica de arquiteturas de microsserviços.


Facilidade de Implantação:

Se é possível implantar atualizações ou novos serviços sem afetar todo o sistema, isso sugere uma abordagem de microsserviços, onde os serviços podem ser implantados de forma independente.

Banco de dados

Banco de Dados:
MongoDB para Gerenciamento de Vídeos:

Motivo: O MongoDB é um banco de dados NoSQL que armazena dados em formato JSON-like (BSON).
Ele é eficaz para armazenar grandes volumes de dados sem uma estrutura rígida, o que pode ser benéfico para informações relacionadas a vídeos, que podem ter diferentes campos e formatos.

MySQL para Informações de Pagamento e Usuários:

Motivo: O MySQL é um banco de dados relacional que é eficaz para lidar com dados estruturados e transacionais. 
Informações de pagamento e dados do usuário podem ter uma estrutura mais definida, tornando um banco de dados relacional uma escolha adequada.

Modelagem de Dados:

Coleções no MongoDB para Vídeos:

Modelagem: Cada coleção no MongoDB pode armazenar informações sobre vídeos. 
Cada documento na coleção pode representar um vídeo e conter campos variáveis, como título, descrição, URL, categoria, etc. Isso permite flexibilidade na representação de dados de vídeo.

Tabelas no MySQL para Usuários e Informações de Pagamento:

Modelagem: No MySQL, foram separadas para armazenar informações de usuários e detalhes de pagamento. 
Cada tabela terá colunas específicas, como nome, e-mail, senha para a tabela de usuários, e informações de pagamento para a tabela correspondente.

Normalização e Desnormalização:

Modelagem: Normalize os dados quando a consistência e a atualização eficiente são críticas. 
Desnormalize quando a leitura eficiente e a redução da complexidade das consultas são prioridades. O equilíbrio entre normalização e desnormalização dependerá dos requisitos específicos do seu aplicativo.












Requisitos do sistema 

1. Introdução
1.1 Objetivo
Este documento tem como objetivo descrever os requisitos funcionais do sistema, fornecendo uma visão geral das funcionalidades que serão implementadas.

1.2 Escopo
O sistema a ser desenvolvido é um site para exibição de vídeos, com recursos de login, área de pagamento, área de administrador e controle de vídeos. 
Os usuários terão a capacidade de assistir a vídeos após a assinatura do serviço.

1.3 Definições, Acrônimos e Abreviações
Usuário: Indivíduo que acessa o site.
Administrador: Usuário com privilégios para gerenciar conteúdo e usuários.
Assinatura: Processo de pagamento que concede acesso a todos os vídeos do site.
2. Requisitos Funcionais
2.1 Autenticação de Usuários
2.1.1 Cadastro de Usuário
O sistema deve permitir que os usuários se cadastrem, fornecendo nome, e-mail, senha e endereço.
O e-mail deve ser único para cada usuário.
2.1.2 Login de Usuário
Usuários registrados devem poder fazer login com e-mail e senha.
Usuários autenticados terão acesso as funcionalidades 
2.2 Área de Pagamento
2.2.1 Assinatura de Serviço
Os usuários devem ter a opção de assinar o serviço para obter acesso a todos os vídeos.
A assinatura é válida indefinidamente após o pagamento único.
2.2.2 Registro de Pagamento
As informações de pagamento serão associadas à conta do usuário no banco de dados.
2.3 Área do Administrador
2.3.1 Gerenciamento de Usuários
Administradores podem visualizar e editar informações de usuários.
Administradores podem desativar contas de usuários.
2.3.2 Gerenciamento de Vídeos
Administradores podem adicionar, editar e remover vídeos.
Vídeos devem ser revisados antes de serem publicados.
2.4 Controle de Vídeos
2.4.1 Adição de Vídeos
Usuários autenticados podem adicionar vídeos.
Informações como título, descrição, URL e categoria devem ser fornecidas.
2.4.2 Edição de Vídeos
Usuários autenticados podem editar informações de vídeos previamente adicionados.
Edições incluem título, descrição, URL e categoria.
2.4.3 Visualização de Vídeos
Usuários autenticados podem visualizar vídeos após assinatura do serviço.
3. Requisitos Não Funcionais
3.1 Segurança
As informações de usuários e transações devem ser protegidas por criptografia.
A autenticação de usuários deve ser segura, evitando vulnerabilidades conhecidas.
3.2 Usabilidade
A interface do usuário deve ser intuitiva e fácil de usar.
Mensagens de erro devem ser claras e orientar o usuário sobre como resolver problemas.
