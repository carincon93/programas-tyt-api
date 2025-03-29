import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AsignaturasService } from './asignaturas.service';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('asignaturas')
export class AsignaturasController {
  constructor(private readonly asignaturasService: AsignaturasService) {}

  @Post()
  create(@Body() createAsignaturaDto: CreateAsignaturaDto) {
    return this.asignaturasService.create(createAsignaturaDto);
  }

  @Post(':asignaturaId/profesores')
  assignProfesor(
    @Param('asignaturaId') asignaturaId: string,
    @Body() body: number[],
  ) {
    return this.asignaturasService.assignProfesor(+asignaturaId, body);
  }

  @Post(':asignaturaProfesorId/grupo/:grupoId')
  assignHorario(
    @Param('asignaturaProfesorId') asignaturaProfesorId: string,
    @Param('grupoId') grupoId: string,
    @Body() createHorarioDto: CreateHorarioDto,
  ) {
    return this.asignaturasService.assignHorario(
      +asignaturaProfesorId,
      +grupoId,
      createHorarioDto,
    );
  }

  @Roles('ADMIN')
  @UseGuards(AuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.asignaturasService.findAll();
  }

  @Get(':asignaturaId/grupo/:grupoId')
  findAllByEstudiante(@Param('estudianteId') estudianteId: string) {
    return this.asignaturasService.findAllByEstudiante(+estudianteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asignaturasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAsignaturaDto: UpdateAsignaturaDto,
  ) {
    return this.asignaturasService.update(+id, updateAsignaturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asignaturasService.remove(+id);
  }
}
