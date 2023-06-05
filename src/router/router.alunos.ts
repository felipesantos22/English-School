import express from 'express';

const routerAlunos = express.Router();

routerAlunos.get('/', () => {
    console.log("Cadastro de alunos!")
});

export default routerAlunos;