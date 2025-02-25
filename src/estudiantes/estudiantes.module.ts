import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  imports: [PrismaModule],
})
export class EstudiantesModule {}
