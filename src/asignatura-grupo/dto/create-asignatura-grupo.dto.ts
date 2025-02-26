import { ApiProperty } from '@nestjs/swagger';

export class CreateAsignaturaGrupoDto {
  @ApiProperty()
  horaInicio: string;

  @ApiProperty()
  horaFin: string;

  @ApiProperty()
  fecha: string;

  @ApiProperty()
  grupoId: number;

  @ApiProperty()
  asignaturaProfesorId: number;
}
