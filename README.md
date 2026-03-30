# Portfólio e Blog

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.9.2-2E8555?style=flat-square&logo=docusaurus&logoColor=white)](https://docusaurus.io/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)

Este é o meu portfólio pessoal e blog, desenvolvido com [Docusaurus](https://docusaurus.io/). Aqui você encontrará informações sobre minhas habilidades, projetos e artigos sobre tecnologia e desenvolvimento de software.

## 🚀 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) versão 20.0 ou superior
- [npm](https://www.npmjs.com/) (geralmente vem junto com o Node.js)

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/bruno-portifolio-blog.git
cd bruno-portifolio-blog
npm install
```

## 🛠️ Desenvolvimento Local

Inicie o servidor de desenvolvimento local:

```bash
npm start
```

Este comando inicia um servidor de desenvolvimento local e abre uma janela do navegador. A maioria das alterações é refletida em tempo real sem a necessidade de reiniciar o servidor.

## 🏗️ Build

Gere o conteúdo estático para produção:

```bash
npm run build
```

Este comando gera conteúdo estático no diretório `build` e pode ser servido usando qualquer serviço de hospedagem de conteúdo estático.

Para visualizar o build localmente:

```bash
npm run serve
```

## 🚀 Deploy

### Usando SSH:

```bash
USE_SSH=true npm run deploy
```

### Sem usar SSH:

```bash
GIT_USER=<Seu usuário do GitHub> npm run deploy
```

Se você estiver usando GitHub Pages para hospedagem, este comando é uma maneira conveniente de construir o site e enviar para a branch `gh-pages`.

## 📁 Estrutura do Projeto

```
├── blog/                    # Posts do blog
├── docs/                    # Documentação
├── src/
│   ├── components/          # Componentes React
│   ├── css/                 # Estilos CSS
│   └── pages/               # Páginas do site
├── static/                  # Arquivos estáticos (imagens, favicons, etc.)
├── docusaurus.config.js     # Configuração do Docusaurus
├── sidebars.js              # Configuração das barras laterais
└── package.json             # Dependências e scripts
```

## 📝 Scripts Disponíveis

| Comando           | Descrição                             |
| ----------------- | ------------------------------------- |
| `npm start run`   | Inicia o servidor de desenvolvimento  |
| `npm run build`   | Gera o build de produção              |
| `npm run serve`   | Serve o build de produção localmente  |
| `npm run deploy`  | Faz o deploy do site                  |
| `npm run clear`   | Limpa o cache do Docusaurus           |
| `npm run swizzle` | Personaliza componentes do Docusaurus |

## 🤝 Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto é de uso pessoal. Todos os direitos reservados.

## 📧 Contato

- **GitHub**: [bruno-ns](https://github.com/bruno-ns)
- **LinkedIn**: [Bruno](https://linkedin.com/in/bruno-nogueira-silva-b2b590281)

---

Desenvolvido com ❤️ usando [Docusaurus](https://docusaurus.io/)
