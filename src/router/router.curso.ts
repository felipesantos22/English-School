import express from 'express';
import cursocontroller from '../controllers/curso'

const routerCursos = express.Router();

routerCursos.post('/cursos', cursocontroller.createCurso);
routerCursos.get('/cursos', cursocontroller.readCurso);
routerCursos.get('/cursos/:id', cursocontroller.idCurso);
routerCursos.put('/cursos/:id', cursocontroller.updateCurso);
routerCursos.delete('/cursos/:id', cursocontroller.deleteCurso);

export default routerCursos;