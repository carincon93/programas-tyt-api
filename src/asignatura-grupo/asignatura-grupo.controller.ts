import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AsignaturaGrupoService } from './asignatura-grupo.service';
import { CreateAsignaturaGrupoDto } from './dto/create-asignatura-grupo.dto';
import { UpdateAsignaturaGrupoDto } from './dto/update-asignatura-grupo.dto';

@Controller('asignaturas-grupo')
export class AsignaturaGrupoController {
  constructor(
    private readonly asignaturaGrupoService: AsignaturaGrupoService,
  ) {}

  @Post()
  create(@Body() createAsignaturaGrupoDto: CreateAsignaturaGrupoDto) {
    return this.asignaturaGrupoService.create(createAsignaturaGrupoDto);
  }

  @Get()
  findAll() {
    return this.asignaturaGrupoService.findAll();
  }

  @Get('/estudiantes/:estudianteId')
  findAllByEstudiante(@Param('estudianteId') estudianteId: string) {
    return this.asignaturaGrupoService.findAllByEstudiante(+estudianteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asignaturaGrupoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAsignaturaGrupoDto: UpdateAsignaturaGrupoDto,
  ) {
    return this.asignaturaGrupoService.update(+id, updateAsignaturaGrupoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asignaturaGrupoService.remove(+id);
  }
}
