import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AsignaturasService } from './asignaturas.service';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';

@Controller('asignaturas')
export class AsignaturasController {
  constructor(private readonly asignaturasService: AsignaturasService) {}

  @Post()
  create(@Body() createAsignaturaDto: CreateAsignaturaDto) {
    return this.asignaturasService.create(createAsignaturaDto);
  }

  @Post(':asignaturaId/profesor/:profesorId')
  assignProfesor(@Param('asignaturaId') asignaturaId: string, @Param('profesorId') profesorId: string) {
    return this.asignaturasService.assignProfesor(+asignaturaId, +profesorId);
  }

  @Post(':asignaturaId/horario/:horarioId')
  assignHorario(@Param('asignaturaId') asignaturaId: string, @Param('horarioId') horarioId: string) {
    return this.asignaturasService.assignProfesor(+asignaturaId, +horarioId);
  }

  @Get()
  findAll() {
    return this.asignaturasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asignaturasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAsignaturaDto: UpdateAsignaturaDto) {
    return this.asignaturasService.update(+id, updateAsignaturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asignaturasService.remove(+id);
  }
}
