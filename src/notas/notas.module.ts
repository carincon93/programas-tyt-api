import { Module } from '@nestjs/common';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [NotasController],
  providers: [NotasService],
  imports: [PrismaModule],
})
export class NotasModule {}
