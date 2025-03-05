import { Module } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { ProfesoresController } from './profesores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [ProfesoresController],
  providers: [ProfesoresService, UsersService],
  imports: [PrismaModule],
})
export class ProfesoresModule {}
