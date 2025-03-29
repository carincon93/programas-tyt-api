import { Injectable } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfesoresService {
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async create(createProfesorDto: CreateProfesorDto) {
    const { user } = createProfesorDto;

    user.rolId = 3;

    const newUser = await this.usersService.create(user);

    return await this.prisma.profesores.create({
      data: {
        universidadId: createProfesorDto.universidadId,
        userId: newUser.id,
      },
    });
  }

  findAll() {
    return this.prisma.profesores.findMany({
      include: {
        universidad: true,
        asignaturas: true,
        user: true,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findAsignaturaProfesorById(profesorId: number) {
    return this.prisma.asignaturaProfesor.findFirst({
      include: {
        asignatura: true,
        profesor: {
          include: {
            user: true,
          },
        },
        horarios: {
          include: {
            grupo: {
              include: {
                programa: true,
              },
            },
          },
        },
      },
      where: {
        id: profesorId,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findAsignaturas(profesorId: number) {
    return this.prisma.asignaturaProfesor.findMany({
      include: {
        asignatura: true,
        horarios: {
          include: {
            grupo: {
              include: {
                programa: true,
              },
            },
          },
        },
      },
      where: {
        profesorId: profesorId,
      },
      orderBy: {
        id: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.profesores.findUnique({
      include: {
        universidad: true,
        asignaturas: true,
        user: true,
      },
      where: { id },
    });
  }

  async update(id: number, updateProfesorDto: UpdateProfesorDto) {
    const { user } = updateProfesorDto;

    const profesor = await this.prisma.profesores.update({
      where: { id },
      data: {
        universidadId: updateProfesorDto.universidadId,
      },
    });

    await this.prisma.users.update({
      where: { id: profesor.userId },
      data: user,
    });

    return profesor;
  }

  remove(id: number) {
    return this.prisma.profesores.delete({
      where: { id },
    });
  }
}
