import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AsistenciasService } from './asistencias.service';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';

@Controller('asistencias')
export class AsistenciasController {
  constructor(private readonly asistenciasService: AsistenciasService) {}

  @Post(':asignaturaProfesorId/estudiantes/:estudianteId')
  create(
    @Param('asignaturaProfesorId') asignaturaProfesorId: string,
    @Param('estudianteId') estudianteId: string,
    @Body() createAsistenciaDto: CreateAsistenciaDto,
  ) {
    return this.asistenciasService.create(
      +asignaturaProfesorId,
      +estudianteId,
      createAsistenciaDto,
    );
  }

  @Get('estudiantes/:estudianteId')
  findAll(@Param('estudianteId') estudianteId: string) {
    return this.asistenciasService.findAll(+estudianteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asistenciasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAsistenciaDto: UpdateAsistenciaDto,
  ) {
    return this.asistenciasService.update(+id, updateAsistenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asistenciasService.remove(+id);
  }
}
