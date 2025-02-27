import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateAsistenciaDto {
  @ApiProperty()
  asiste: boolean;

  @ApiProperty()
  fecha: string;

  @ApiProperty()
  observacion: string;
}
