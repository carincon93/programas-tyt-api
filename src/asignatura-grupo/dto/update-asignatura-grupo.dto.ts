import { PartialType } from '@nestjs/swagger';
import { CreateAsignaturaGrupoDto } from './create-asignatura-grupo.dto';

export class UpdateAsignaturaGrupoDto extends PartialType(CreateAsignaturaGrupoDto) {}
