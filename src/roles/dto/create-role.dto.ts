import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;
}
