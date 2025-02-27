import { Injectable } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotasService {
  constructor(private prisma: PrismaService) {}

  create(
    asignaturaProfesorId: number,
    estudianteId: number,
    createNotaDto: CreateNotaDto,
  ) {
    createNotaDto.nota = Number(createNotaDto.nota);

    return this.prisma.notas.create({
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
