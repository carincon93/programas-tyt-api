import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';

@Controller('profesores')
export class ProfesoresController {
  constructor(private readonly profesoresService: ProfesoresService) {}

  @Post()
  create(@Body() createProfesorDto: CreateProfesorDto) {
    return this.profesoresService.create(createProfesorDto);
  }

  @Get()
  findAll() {
    return this.profesoresService.findAll();
  }

  @Get(':profesorId/asignaturas')
  findAsignaturas(@Param('profesorId') profesorId: string) {
    return this.profesoresService.findAsignaturas(+profesorId);
  }

  @Get(':profesorId/asignatura')
  findAsignaturaByProfesorId(@Param('profesorId') profesorId: string) {
    return this.profesoresService.findAsignaturaProfesorById(+profesorId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesoresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfesorDto: UpdateProfesorDto,
  ) {
    return this.profesoresService.update(+id, updateProfesorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesoresService.remove(+id);
  }
}
