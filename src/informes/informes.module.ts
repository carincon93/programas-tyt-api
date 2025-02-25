import { Module } from '@nestjs/common';
import { InformesService } from './informes.service';
import { InformesController } from './informes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [InformesController],
  providers: [InformesService],
  imports: [PrismaModule],
})
export class InformesModule {}
