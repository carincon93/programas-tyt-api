import { Injectable } from '@nestjs/common';
import { CreateUniversidadeDto } from './dto/create-universidade.dto';
import { UpdateUniversidadeDto } from './dto/update-universidade.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UniversidadesService {
  constructor(private prisma: PrismaService) {}
  
  create(createUniversidadeDto: CreateUniversidadeDto) {
    return this.prisma.universidades.create({
      data: createUniversidadeDto,
    })
  }

  findAll() {
    return this.prisma.universidades.findMany()
  }

  findOne(id: number) {
    return this.prisma.universidades.findUnique({
        where: { id },
    })
  }

  update(id: number, updateUniversidadeDto: UpdateUniversidadeDto) {
    return this.prisma.universidades.update({
      where: {
          id,
      },
      data: updateUniversidadeDto,
    })
  }

  remove(id: number) {
    return this.prisma.universidades.delete({
      where: { id },
    })
  }
}
