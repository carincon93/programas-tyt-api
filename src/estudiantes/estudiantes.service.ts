import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class EstudiantesService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto) {
    const { user } = createEstudianteDto;

    user.rolId = 2;

    const newUser = await this.usersService.create(user);

    return await this.prisma.estudiantes.create({
      data: {
        institucionId: createEstudianteDto.institucionId,
        grupoId: createEstudianteDto.grupoId,
        codigoEstudiante: createEstudianteDto.codigoEstudiante,
        userId: newUser.id,
      },
    });
  }

  findAll() {
    return this.prisma.estudiantes.findMany({
      include: {
        user: true,
        institucion: true,
        grupo: {
          include: {
            programa: true,
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.estudiantes.findUnique({
      include: {
        user: true,
        institucion: true,
        grupo: {
          include: {
            programa: true,
          },
        },
      },
      where: { id },
    });
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    const { user } = updateEstudianteDto;

    const estudiante = await this.prisma.estudiantes.update({
      where: { id },
      data: {
        institucionId: updateEstudianteDto.institucionId,
      },
    });

    await this.prisma.users.update({
      where: { id: estudiante.userId },
      data: user,
    });

    return estudiante;
  }

  remove(id: number) {
    return this.prisma.estudiantes.delete({
      where: { id },
    });
  }
}
