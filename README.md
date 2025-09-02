# Todo List ADS

Este é um projeto de lista de tarefas (Todo List) desenvolvido como entrega para a disciplina.  
O projeto possui backend em Spring Boot e frontend em Angular, com tema Dark/Light e rodapé com nome do desenvolvedor e link para o GitHub.

---

## Estrutura do projeto

- **backend/** — API em Spring Boot (Java 17, Maven)  
- **frontend/** — Aplicação Angular que consome a API  

---

## Rodando localmente (opcional)

### Backend
Requisitos: Java 17+, Maven

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

A API ficará disponível em `http://localhost:8080/api/todos`.  
O console do H2 (banco em memória) em `http://localhost:8080/h2-console`.

### Frontend
Requisitos: Node.js, npm, Angular CLI

```bash
cd frontend
npm install
ng serve
```

Abra `http://localhost:4200` no navegador.  

O botão **Toggle Theme** alterna entre o tema claro e escuro.  

---

## Subindo no GitHub

Para enviar este projeto para o seu repositório:

```bash
git init
git add .
git commit -m "Entrega trabalho - TodoList ADS"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/todolist-ads.git
git push -u origin main --force
```

> Substitua `SEU-USUARIO` pelo seu usuário no GitHub.

---

## Observações

- Rodapé: “Desenvolvido por Higor Lopes — GitHub”  
- O backend usa H2 em memória, suficiente para testes.  
- Tema Dark/Light já implementado no frontend.  
- Projeto pronto para avaliação, sem necessidade de configuração adicional.
