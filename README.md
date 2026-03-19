🚀 Projeto Desafio Senff - Testes Automatizados



Este projeto contém testes automatizados para o site [Demoblaze](https://www.demoblaze.com), Front-End 

E Back-End (API).= https://restful-booker.herokuapp.com/apidoc/index.htm  

Feito com Cypress, Node.js e versionamento no GitHub.  






📂 Estrutura do Projeto


---






🛠 Tecnologias Utilizadas

- Node.js - Ambiente de execução JavaScript  
- Cypress - Testes automatizados E2E e API  
- Git & GitHub - Controle de versão e repositório remoto  



⚡ Como Rodar o Projeto

1️⃣ Pré-requisitos

- Node.js  
- npm   
- VS Code 

2️⃣ Instalar Dependências

Abra o terminal na pasta do projeto e rode:
npm install
Isso instala o Cypress e outras dependências necessárias.


3️⃣ Rodar Testes de Front-End 
npx cypress open

✅ Passos no Cypress:

Abrir o arquivo cypress/e2e/front/desafio.cy.js
Executar o teste completo:
Acessa o site
Cadastro de usuário
Login
Seleção de produto
Adiciona ao carrinho
Finaliza compra





4️⃣ Rodar Testes de Back-End (API)
npx cypress run --spec "cypress/e2e/backend/backend.cy.js"

✅ O que acontece:
Executa testes de endpoints (ex.: cadastro, login)
Valida respostas e status HTTP
Resultados aparecem no terminal

🌐 GitHub
Repositório: https://github.com/flaviobjj/desafio-senff








👤 Autor
Flavio Barbosa
QA & Automação de Testes
