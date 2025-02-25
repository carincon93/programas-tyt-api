import { Module } from '@nestjs/common';
import { UniversidadesService } from './universidades.service';
import { UniversidadesController } from './universidades.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UniversidadesController],
  providers: [UniversidadesService],
  imports: [PrismaModule],
})
export class UniversidadesModule {}
