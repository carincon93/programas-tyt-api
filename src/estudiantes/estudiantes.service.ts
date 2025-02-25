import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstudiantesService {
  constructor(private prisma: PrismaService) {}
  
  create(createEstudianteDto: CreateEstudianteDto) {
    return this.prisma.estudiantes.create({
      data: createEstudianteDto,
    })
  }

  findAll() {
    return this.prisma.estudiantes.findMany()
  }

  findOne(id: number) {
    return this.prisma.estudiantes.findUnique({
        where: { id },
    })
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return this.prisma.estudiantes.update({
      where: {
          id,
      },
      data: updateEstudianteDto,
    })
  }

  remove(id: number) {
    return this.prisma.estudiantes.delete({
      where: { id },
    })
  }
}
