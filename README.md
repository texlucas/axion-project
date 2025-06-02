
# 🚀 Desafio Técnico Axion – API + Front-end

Este repositório contém a solução do desafio técnico proposto pela **Axion**. O objetivo é testar habilidades técnicas em desenvolvimento web, utilizando **Strapi (Node.js)** para o back-end e uma aplicação **React** no front-end.

## 🗂 Estrutura do Projeto

- `axion-teste/`: API construída com Strapi.
- `axion-orange/`: Front-end da aplicação em React.


## ⚙️ Tecnologias Utilizadas

### Back-end (Strapi):
- Node.js
- Strapi
- SQLite (banco de dados local)

### Front-end:
- React
- React Router DOM
- CSS Modules

## 📦 Como executar o projeto localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

---

### 2. Iniciar o Back-end (Strapi)
```bash
cd axion-teste
npm install         # Instala dependências
npm run build       # Gera build do projeto
npm run develop     # Inicia servidor Strapi em modo de desenvolvimento
```

Se tudo estiver correto, o servidor estará rodando em `http://localhost:1337`.

---

### 3. Iniciar o Front-end (React)
```bash
cd ../axion-orange
npm install         # Instala dependências
npm run start       # Inicia o front-end em modo de desenvolvimento
```

A aplicação estará disponível em `http://localhost:3000`.

---

## 🔐 Login de Acesso

Use as credenciais abaixo para acessar a aplicação:

- **Email:** `axioner@axion.company`  
- **Senha:** `Axioner123`

---

## 🧩 Funcionalidades

- Autenticação com Strapi
- Listagem de:
  - Pessoas
  - Comidas
  - Locais
- Cards dinâmicos com imagem e nome
- Responsividade e fidelidade visual ao layout
- Ordenação crescente/decrescente (sugestão extra)
  
---

## 🎨 Layout

- Protótipo: [MarvelApp](https://marvelapp.com/35gh79g)
- Paleta de Cores:
  - `#4A4A4A`
  - `#AE23A9`
  - `#DC4E1B`
  - `#9B9B9B`
  - `#FFFFFF`
  - `#F9F9F9`
- Fonte: [Open Sans – Google Fonts](https://fonts.google.com/specimen/Open+Sans)

---

## 🖼️ Recursos Visuais

Baixe os recursos visuais necessários no link:  
[https://bit.ly/3oIQyCC](https://bit.ly/3oIQyCC)

- Pasta `imgs`: imagens de fundo dos cards
- Pasta `assets`: plano de fundo do layout e ícones

Copie a pasta `assets` para o diretório do front-end (`axion-orange`).

---

## 📘 Observações

- Os dados estão no banco SQLite e não precisam ser configurados manualmente.
- O back-end expõe os dados em JSON com o seguinte formato:
```json
{
  "name": "Nome do item",
  "link": "URL da imagem"
}
```

- Os campos `name` e `link` devem ser utilizados para exibir os cards corretamente.

## 🏁 Finalizando

Após as etapas de configuração, você pode:
- Navegar entre as páginas da aplicação
- Visualizar os dados de forma dinâmica
- Realizar login com o usuário fornecido
- Utilizar os cards como descrito no layout
