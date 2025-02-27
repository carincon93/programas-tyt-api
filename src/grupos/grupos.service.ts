import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GruposService {
  constructor(private prisma: PrismaService) {}

  create(createGrupoDto: CreateGrupoDto) {
    createGrupoDto.programaId = Number(createGrupoDto.programaId);

    return this.prisma.grupos.create({
      data: createGrupoDto,
    });
  }

  findAll() {
    return this.prisma.grupos.findMany({
      include: {
        programa: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.grupos.findUnique({
      include: {
        programa: true,
        estudiantes: {
          include: {
            user: true,
            institucion: true,
          },
        },
      },
      where: { id },
    });
  }

  update(id: number, updateGrupoDto: UpdateGrupoDto) {
    return this.prisma.grupos.update({
      where: {
        id,
      },
      data: updateGrupoDto,
    });
  }

  remove(id: number) {
    return this.prisma.grupos.delete({
      where: { id },
    });
  }
}
