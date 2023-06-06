import { Request, Response } from "express";
import cursoService from '../services/curso'

async function createCurso(req: Request, res: Response) {
    const { nome } = req.body;
    try {
        const create = await cursoService.createCursoService(nome);
        return res.status(200).json(create);
    } catch (error) {
        return res.status(400).json({ message: "Curso não criado." })
    }
}

async function readCurso(_req: Request, res: Response) {
    try {
        const read = await cursoService.readCursoService();
        return res.status(200).json(read);
    } catch (error) {
        return res.status(400).json({ message: "Not found." });
    }
}

async function idCurso(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const readId = await cursoService.readId(Number(id));
        return res.status(200).json(readId);
    } catch (error) {
        return res.status(200).json({ message: error });
    }
}

async function updateCurso(req: Request, res: Response) {
    const { id } = req.params;
    const { nome } = req.body;
    try {
        const update = await cursoService.updateCursoService(Number(id), nome);
        return res.status(200).json(update);
    } catch (error) {
        return res.status(200).json({ message: error });
    }
}

async function deleteCurso(req: Request, res: Response) {
    const { id } = req.params;
    try {
        await cursoService.deleteCursoService(Number(id));
        return res.status(200).json({ message: "Curso deletado." });
    } catch (error) {
        return res.status(200).json({ message: "Curso não existe." });
    }
}

export default { createCurso, readCurso, idCurso, updateCurso, deleteCurso };