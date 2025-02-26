import { ApiProperty } from '@nestjs/swagger';

export class CreateInstitucioneDto {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  direccion: string;

  @ApiProperty()
  telefono: string;
}
