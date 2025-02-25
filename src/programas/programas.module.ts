import { Module } from '@nestjs/common';
import { ProgramasService } from './programas.service';
import { ProgramasController } from './programas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ProgramasController],
  providers: [ProgramasService],
  imports: [PrismaModule],
  
})
export class ProgramasModule {}
