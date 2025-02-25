import { Module } from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { AsistenciasController } from './asistencias.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AsistenciasController],
  providers: [AsistenciasService],
  imports: [PrismaModule],
})
export class AsistenciasModule {}
