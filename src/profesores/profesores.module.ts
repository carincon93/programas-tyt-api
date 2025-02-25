import { Module } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { ProfesoresController } from './profesores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProfesoresController],
  providers: [ProfesoresService],
  imports: [PrismaModule],
  
})
export class ProfesoresModule {}
