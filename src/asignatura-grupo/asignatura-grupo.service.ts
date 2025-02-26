import { Injectable } from '@nestjs/common';
import { CreateAsignaturaGrupoDto } from './dto/create-asignatura-grupo.dto';
import { UpdateAsignaturaGrupoDto } from './dto/update-asignatura-grupo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AsignaturaGrupoService {
  constructor(private prisma: PrismaService) {}

  create(createAsignaturaGrupoDto: CreateAsignaturaGrupoDto) {
    createAsignaturaGrupoDto.grupoId = Number(createAsignaturaGrupoDto.grupoId);
    return this.prisma.asignaturaGrupo.create({
      data: createAsignaturaGrupoDto,
    });
  }

  findAll() {
    return this.prisma.asignaturaGrupo.findMany({
      include: {
        asignaturaProfesor: {
          include: {
            profesor: {
              include: {
                user: true,
              },
            },
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findAllByEstudiante(estudianteId: number) {
    return this.prisma.asignaturaGrupo.findMany({
      where: {
        asignaturaProfesor: {
          horarios: {
            some: {
              grupo: {
                estudianteGrupos: {
                  some: {
                    estudianteId: estudianteId,
                  },
                },
              },
            },
          },
        },
      },
      include: {
        asignaturaProfesor: {
          include: {
            asignatura: true,
            horarios: true, // Opcional si solo necesitas saber que existen
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.asignaturaGrupo.findUnique({
      include: {
        asignaturaProfesor: {
          include: {
            horarios: {
              include: {
                grupo: {
                  include: {
                    programa: true,
                  },
                },
              },
            },
            profesor: {
              include: {
                user: true,
              },
            },
          },
        },
      },
      where: { id },
    });
  }

  update(id: number, updateAsignaturaGrupoDto: UpdateAsignaturaGrupoDto) {
    return this.prisma.asignaturaGrupo.update({
      where: {
        id,
      },
      data: updateAsignaturaGrupoDto,
    });
  }

  remove(id: number) {
    return this.prisma.asignaturaGrupo.delete({
      where: { id },
    });
  }
}
