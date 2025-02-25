import { Injectable } from '@nestjs/common';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HorariosService {
    constructor(private prisma: PrismaService) {}
  
  create(createHorarioDto: CreateHorarioDto) {
    return this.prisma.horarios.create({
      data: createHorarioDto,
    })
  }

  findAll() {
    return this.prisma.horarios.findMany()
  }

  findOne(id: number) {
    return this.prisma.horarios.findUnique({
        where: { id },
    })
  }

  update(id: number, updateHorarioDto: UpdateHorarioDto) {
    return this.prisma.horarios.update({
      where: {
          id,
      },
      data: updateHorarioDto,
    })
  }

  remove(id: number) {
    return this.prisma.horarios.delete({
      where: { id },
    })
  }
}
