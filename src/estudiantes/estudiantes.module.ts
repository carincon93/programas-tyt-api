import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [EstudiantesController],
  providers: [EstudiantesService, UsersService],
  imports: [PrismaModule],
})
export class EstudiantesModule {}
