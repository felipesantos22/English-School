import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createCursoService(nome: string) {
    const create = prisma.curso.create({
        data: {
            nome,
        }
    });
    return create;
}

async function readCursoService() {
    const read = prisma.curso.findMany();
    return read;
}

async function readId(id: number) {
    const read = prisma.curso.findUnique({
        where: {
            id,
        }
    });
    return read;
}

async function updateCursoService(id: number, nome: string) {
    const update = prisma.curso.update({
        where: {
            id,
        },
        data: {
            nome,
        }
    });
    return update;
}

async function deleteCursoService(id: number) {
    const deleteCurso = prisma.curso.delete({
        where: {
            id,
        }
    })
    return deleteCurso;
}

export default { createCursoService, readCursoService, readId, updateCursoService, deleteCursoService };