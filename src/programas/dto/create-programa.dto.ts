import { ApiProperty } from '@nestjs/swagger';

export class CreateProgramaDto {
  @ApiProperty()
  codigoPrograma: string;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  universidadId: number;
}
