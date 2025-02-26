import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateAsistenciaDto {
  @Transform(({ value }) => value === 'true')
  @ApiProperty()
  asiste: boolean;

  @ApiProperty()
  fecha: string;

  @ApiProperty()
  observacion: string;
}
