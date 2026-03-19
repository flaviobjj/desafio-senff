Projeto Desafio Senff - Testes Automatizados


Front-End para o site [Demoblaze](https://www.demoblaze.com), 

Back-End (API). para https://restful-booker.herokuapp.com/apidoc/index.htm  


Feito com Cypress, Node.js e versionamento no GitHub.  



Estrutura do Projeto

desafio-senff/
├─ cypress/
│ ├─ e2e/
│ │ ├─ front/ Testes de Front-End (UI)
│ │ │ └─ desafio.cy.js
│ │ ├─ backend/ Testes de API (Back-End)
│ │ └─ backend.cy.js
├─ package.json
├─ package-lock.json
└─ README.md


Tecnologias Utilizadas

- Node.js - Ambiente de execução JavaScript  
- Cypress - Testes automatizados E2E e API  
- Git & GitHub - Controle de versão e repositório remoto  


Como Rodar o Projeto


1️. Pré-requisitos

- Node.js  
- npm   
- VS Code 



2️. Instalar Dependências

comando via terminal  =  npm install

instala o Cypress e outras dependências necessárias.



3️. Rodar Testes de Front-End 

comando via terminal  =  npx cypress open

3.1 Passos no Cypress:

Abrir o arquivo cypress/e2e/front/desafio.cy.js
Executar o teste completo:
Acessa o site
Cadastro de usuário
Login
Seleção de produto
Adiciona ao carrinho
Finaliza compra



4️.Rodar Testes de Back-End (API)

comando via terminal  =   npx cypress run --spec "cypress/e2e/backend/backend.cy.js"

4.1 O que acontece:
Executa testes de endpoints (cadastro, login)
Valida respostas e status HTTP
Resultados aparecem no terminal





GitHub
Repositório: https://github.com/flaviobjj/desafio-senff




Autor
Flavio Barbosa
QA & Automação 
