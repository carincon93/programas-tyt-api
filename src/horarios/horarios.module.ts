import { Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [HorariosController],
  providers: [HorariosService],
  imports: [PrismaModule],
})
export class HorariosModule {}
