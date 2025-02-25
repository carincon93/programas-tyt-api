import { Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AsistenciasService {
  constructor(private prisma: PrismaService) {}
  
  create(createAsistenciaDto: CreateAsistenciaDto) {
    return this.prisma.asistencias.create({
      data: createAsistenciaDto,
    })
  }

  findAll() {
    return this.prisma.asistencias.findMany()
  }

  findOne(id: number) {
    return this.prisma.asistencias.findUnique({
        where: { id },
    })
  }

  update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return this.prisma.asistencias.update({
      where: {
          id,
      },
      data: updateAsistenciaDto,
    })
  }

  remove(id: number) {
    return this.prisma.asistencias.delete({
      where: { id },
    })
  }
}
