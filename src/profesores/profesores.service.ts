import { Injectable } from '@nestjs/common';
import { CreateProfesoreDto } from './dto/create-profesore.dto';
import { UpdateProfesoreDto } from './dto/update-profesore.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfesoresService {
    constructor(private prisma: PrismaService) {}
  
  async create(createProfesoreDto: CreateProfesoreDto) {
    const user = await this.prisma.users.create({
      data: createProfesoreDto
    })

    return await this.prisma.profesores.create({
      data: {
        userId: user.id
      },
    })
  }

  findAll() {
    return this.prisma.profesores.findMany()
  }

  findOne(id: number) {
    return this.prisma.profesores.findUnique({
        where: { id },
    })
  }

  update(id: number, updateProfesoreDto: UpdateProfesoreDto) {
    // return this.prisma.profesores.update({
    //   where: {
    //       id,
    //   },
    //     data: updateProfesoreDto,
    // })
  }

  remove(id: number) {
    return this.prisma.profesores.delete({
      where: { id },
    })
  }
}
