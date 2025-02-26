import { Injectable } from '@nestjs/common';
import { CreateInstitucioneDto } from './dto/create-institucione.dto';
import { UpdateInstitucioneDto } from './dto/update-institucione.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstitucionesService {
  constructor(private prisma: PrismaService) {}

  create(createInstitucioneDto: CreateInstitucioneDto) {
    return this.prisma.instituciones.create({
      data: createInstitucioneDto,
    });
  }

  findAll() {
    return this.prisma.instituciones.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.instituciones.findUnique({
      include: {
        estudiantes: {
          include: {
            user: true,
          },
        },
      },
      where: { id },
    });
  }

  update(id: number, updateInstitucioneDto: UpdateInstitucioneDto) {
    return this.prisma.instituciones.update({
      where: {
        id,
      },
      data: updateInstitucioneDto,
    });
  }

  remove(id: number) {
    return this.prisma.instituciones.delete({
      where: { id },
    });
  }
}
