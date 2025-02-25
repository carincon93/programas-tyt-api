import { Injectable } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotasService {
  constructor(private prisma: PrismaService) {}
  
  create(createNotaDto: CreateNotaDto) {
    return this.prisma.notas.create({
      data: createNotaDto,
    })
  }

  findAll() {
    return this.prisma.notas.findMany()
  }

  findOne(id: number) {
    return this.prisma.notas.findUnique({
        where: { id },
    })
  }

  update(id: number, updateNotaDto: UpdateNotaDto) {
    return this.prisma.notas.update({
        where: {
            id,
        },
        data: updateNotaDto,
    })
  }

  remove(id: number) {
    return this.prisma.notas.delete({
      where: { id },
    })
  }
}
