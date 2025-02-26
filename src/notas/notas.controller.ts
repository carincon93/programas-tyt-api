import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotasService } from './notas.service';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';

@Controller('notas')
export class NotasController {
  constructor(private readonly notasService: NotasService) {}

  @Post(':asignaturaId/estudiante/:estudianteId')
  create(
    @Param('asignaturaId') asignaturaId: string,
    @Param('estudianteId') estudianteId: string,
    @Body() createNotaDto: CreateNotaDto,
  ) {
    return this.notasService.create(
      +asignaturaId,
      +estudianteId,
      createNotaDto,
    );
  }

  @Get()
  findAll() {
    return this.notasService.findAll();
  }

  @Get('estudiantes/:estudianteId')
  findAllByEstudiante(@Param('estudianteId') estudianteId: string) {
    return this.notasService.findAllByEstudiante(+estudianteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotaDto: UpdateNotaDto) {
    return this.notasService.update(+id, updateNotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notasService.remove(+id);
  }
}
