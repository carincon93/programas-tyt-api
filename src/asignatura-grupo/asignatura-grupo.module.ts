import { Module } from '@nestjs/common';
import { AsignaturaGrupoService } from './asignatura-grupo.service';
import { AsignaturaGrupoController } from './asignatura-grupo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AsignaturaGrupoController],
  providers: [AsignaturaGrupoService],
  imports: [PrismaModule],
})
export class AsignaturaGrupoModule {}
