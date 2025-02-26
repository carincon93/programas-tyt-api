import { Injectable } from '@nestjs/common';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHorarioDto } from './dto/create-horario.dto';

@Injectable()
export class AsignaturasService {
  constructor(private prisma: PrismaService) {}

  create(createAsignaturaDto: CreateAsignaturaDto) {
    return this.prisma.asignaturas.create({
      data: createAsignaturaDto,
    });
  }

  assignProfesor(asignaturaId: number, profesorId: number) {
    return this.prisma.asignaturaProfesor.create({
      data: {
        asignaturaId: asignaturaId,
        profesorId: profesorId,
      },
    });
  }

  assignHorario(
    asignaturaProfesorId: number,
    grupoId: number,
    createHorarioDto: CreateHorarioDto,
  ) {
    return this.prisma.asignaturaGrupo.create({
      data: {
        fecha: createHorarioDto.fecha,
        horaInicio: createHorarioDto.horaInicio,
        horaFin: createHorarioDto.horaFin,
        asignaturaProfesorId: asignaturaProfesorId,
        grupoId: grupoId,
      },
    });
  }

  findAll() {
    return this.prisma.asignaturas.findMany({
      include: {
        asignaturaProfesores: {
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
    return this.prisma.asignaturas.findMany({
      include: {
        asignaturaProfesores: {
          include: {
            horarios: {
              include: {
                grupo: {
                  include: {
                    estudianteGrupos: {
                      where: {
                        estudianteId: estudianteId,
                      },
                    },
                  },
                },
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

  findOne(id: number) {
    return this.prisma.asignaturas.findUnique({
      include: {
        asignaturaProfesores: {
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

  update(id: number, updateAsignaturaDto: UpdateAsignaturaDto) {
    return this.prisma.asignaturas.update({
      where: {
        id,
      },
      data: updateAsignaturaDto,
    });
  }

  remove(id: number) {
    return this.prisma.asignaturas.delete({
      where: { id },
    });
  }
}
