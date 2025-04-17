import { Injectable } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotasService {
  constructor(private prisma: PrismaService) {}

  async create(
    asignaturaProfesorId: number,
    estudianteId: number,
    createNotaDto: CreateNotaDto,
  ) {
    createNotaDto.nota = Number(createNotaDto.nota);

    const notasExistentes =
      await this.prisma.notas.findMany({
        where: {
          estudianteId: estudianteId,
          asignaturaProfesorId: asignaturaProfesorId,
          periodo: createNotaDto.periodo,
        },
    })

    if (notasExistentes.length > 0) {
      return await this.prisma.notas.update({
        where: {
          id: notasExistentes[0].id,
        },
        data: {
          ...createNotaDto
        }     
      })
    }

    return await this.prisma.notas.create({
      data: {
        ...createNotaDto,
        asignaturaProfesorId,
        estudianteId,
      },
    });
  }

  findAll() {
    return this.prisma.notas.findMany({
      include: {
        asignaturaProfesor: {
          include: {
            profesor: {
              include: {
                user: true,
              },
            },
            asignatura: true,
          },
        },
        estudiante: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findAllByEstudiante(estudianteId: number) {
    return this.prisma.notas.findMany({
      include: {
        asignaturaProfesor: {
          include: {
            asignatura: true,
            profesor: {
              include: {
                user: true,
              },
            },
          },
        },
        estudiante: {
          include: {
            user: true,
          },
        },
      },
      where: {
        estudianteId,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.notas.findUnique({
      include: {
        asignaturaProfesor: {
          include: {
            asignatura: true,
          },
        },
        estudiante: {
          include: {
            user: true,
          },
        },
      },
      where: { id },
    });
  }

  update(id: number, updateNotaDto: UpdateNotaDto) {
    updateNotaDto.nota = Number(updateNotaDto.nota);

    return this.prisma.notas.update({
      where: {
        id,
      },
      data: updateNotaDto,
    });
  }

  remove(id: number) {
    return this.prisma.notas.delete({
      where: { id },
    });
  }
}
