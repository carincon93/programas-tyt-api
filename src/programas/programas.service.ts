import { Injectable } from '@nestjs/common';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProgramasService {
  constructor(private prisma: PrismaService) {}
  
  create(createProgramaDto: CreateProgramaDto) {
    return this.prisma.programas.create({
      data: createProgramaDto,
    })
  }

  findAll() {
    return this.prisma.programas.findMany()
  }

  findOne(id: number) {
    return this.prisma.programas.findUnique({
        where: { id },
    })
  }

  update(id: number, updateProgramaDto: UpdateProgramaDto) {
    return this.prisma.programas.update({
      where: {
          id,
      },
      data: updateProgramaDto,
    })
  }

  remove(id: number) {
    return this.prisma.programas.delete({
      where: { id },
    })
  }
}
