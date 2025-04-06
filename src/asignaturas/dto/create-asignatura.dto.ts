import { ApiProperty } from '@nestjs/swagger';

export class CreateAsignaturaDto {
  @ApiProperty()
  codigoAsignatura: string;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  activo: boolean;
}
