import { Module } from '@nestjs/common';
import { AsignaturasService } from './asignaturas.service';
import { AsignaturasController } from './asignaturas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AsignaturasController],
  providers: [AsignaturasService],
  imports: [PrismaModule],
})
export class AsignaturasModule {}
