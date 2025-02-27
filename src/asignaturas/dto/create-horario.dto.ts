import { ApiProperty } from '@nestjs/swagger';

export class CreateHorarioDto {
  @ApiProperty()
  horaInicio: string;

  @ApiProperty()
  horaFin: string;

  @ApiProperty()
  fecha: string;
}
