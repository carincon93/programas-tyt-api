import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  nombres: string;

  @ApiProperty()
  apellidos: string;

  @ApiProperty()
  correo: string;

  @ApiProperty()
  telefono: string;

  @ApiProperty()
  direccion: string;

  @ApiProperty()
  tipoDocumento: string;

  @ApiProperty()
  numeroDocumento: string;
}
