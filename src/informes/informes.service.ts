import { Injectable } from '@nestjs/common';
import { CreateInformeDto } from './dto/create-informe.dto';
import { UpdateInformeDto } from './dto/update-informe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InformesService {
  constructor(private prisma: PrismaService) {}
  
  create(createInformeDto: CreateInformeDto) {
    return 'This action adds a new informe';
  }

  findAll() {
    return this.prisma.informes.findMany()
  }

  findOne(id: number) {
    return this.prisma.informes.findUnique({
        where: { id },
    })
  }

  update(id: number, updateInformeDto: UpdateInformeDto) {
    return `This action updates a #${id} informe`;
  }

  remove(id: number) {
    return this.prisma.informes.delete({
      where: { id },
    })
  }
}
