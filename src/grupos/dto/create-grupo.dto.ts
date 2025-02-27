import { ApiProperty } from "@nestjs/swagger"

export class CreateGrupoDto {
  @ApiProperty()
  codigoGrupo: string;

  @ApiProperty()
  programaId: number;
}
