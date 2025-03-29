import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UniversidadesService } from './universidades.service';
import { CreateUniversidadeDto } from './dto/create-universidade.dto';
import { UpdateUniversidadeDto } from './dto/update-universidade.dto';
import { Public } from 'src/decorators/public.decorator';

@Controller('universidades')
export class UniversidadesController {
  constructor(private readonly universidadesService: UniversidadesService) {}

  @Post()
  create(@Body() createUniversidadeDto: CreateUniversidadeDto) {
    return this.universidadesService.create(createUniversidadeDto);
  }

  @Get()
  findAll() {
    return this.universidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universidadesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUniversidadeDto: UpdateUniversidadeDto,
  ) {
    return this.universidadesService.update(+id, updateUniversidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universidadesService.remove(+id);
  }
}
