import { Injectable } from '@nestjs/common';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AsignaturasService {
  constructor(private prisma: PrismaService) {}

  create(createAsignaturaDto: CreateAsignaturaDto) {
    return this.prisma.asignaturas.create({
      data: createAsignaturaDto,
    })
  }

  assignProfesor(asignaturaId, profesorId) {
    return this.prisma.asignaturaProfesor.create({
      data: {
        asignaturaId: asignaturaId,
        profesorId: profesorId
      },
    })
  }

  assignHorario(asignaturaId, horarioId) {
    return this.prisma.asignaturaHorario.create({
      data: {
        asignaturaId: asignaturaId,
        horarioId: horarioId
      },
    })
  }

  findAll() {
    return this.prisma.asignaturas.findMany()
  }

  findOne(id: number) {
    return this.prisma.asignaturas.findUnique({
        where: { id },
    })
  }

  update(id: number, updateAsignaturaDto: UpdateAsignaturaDto) {
    return this.prisma.asignaturas.update({
      where: {
          id,
      },
      data: updateAsignaturaDto,
    })
  }

  remove(id: number) {
    return this.prisma.asignaturas.delete({
      where: { id },
    })
  }
}
