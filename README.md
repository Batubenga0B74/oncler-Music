# 🎵 Oncler — Plataforma de Música

<p align="center">
  <img src="./public/screenshot.png" alt="Oncler Screenshot" width="800">
</p>



O **Oncler** é uma plataforma online que conecta artistas e ouvintes, permitindo **upload** e **download** de músicas de forma simples e rápida.  
O projeto foi desenvolvido com foco em **experiência do usuário**, **design moderno** e **suporte para artistas independentes**.

---

## 🚀 Funcionalidades

- 📥 **Upload de músicas** para artistas e criadores de conteúdo.
- 📤 **Download** rápido de faixas em alta qualidade.
- 🔍 **Busca inteligente** para encontrar músicas, álbuns e artistas.
- 📈 **Listas de tendências** (Trending Songs e Albums).
- 🆕 **Novidades** com faixas recentemente adicionadas.
- 🎨 **Design responsivo** adaptado para dispositivos móveis e desktop.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React + Next.js + Tailwind CSS
- **Backend:** Node.js + fastfy
- **Banco de Dados:** splite
- **deezer:** Api externas de preview de músicas
- **deploy:** netlify



## 🛠️ Ferramentas de testes e Monitoramento

- **E2E:**playwright
- **Relatório:**Allure report 
- **deploy relatorio:** Github pages 
- **CICD** Github actions 
- **Monitoramento** sentry
- **test de integração** Jest
- **test unitários** Jest

---

## 📦 Instalação e Uso

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/oncler.git

# Entre na pasta do projeto
cd oncler

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Rodar teste de integração
npx jest

# rodar test e2e com playwrigtht
 npx playwright test

 # rodar relatorio
npx allure serve