import { Module } from '@nestjs/common';
import { InstitucionesService } from './instituciones.service';
import { InstitucionesController } from './instituciones.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [InstitucionesController],
  providers: [InstitucionesService],
  imports: [PrismaModule],
})
export class InstitucionesModule {}
