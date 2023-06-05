import express from 'express';
import routerAlunos from './src/router/router.alunos';

const app = express();

app.use(express.json());

app.use(routerAlunos);

export default app;