import { ApiProperty } from "@nestjs/swagger"

export class CreateNotaDto {
  @ApiProperty()
  nota: number;

  @ApiProperty()
  fecha: string;

  @ApiProperty()
  observacion: string;

  @ApiProperty()
  periodo: string;
}
