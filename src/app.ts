import express from 'express';
import routerAlunos from './router/router.alunos';
import routerCursos from './router/router.curso';

const app = express();

app.use(express.json());

app.use(routerAlunos);
app.use(routerCursos);

export default app;