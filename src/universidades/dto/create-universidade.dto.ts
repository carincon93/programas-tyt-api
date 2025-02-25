import { ApiProperty } from "@nestjs/swagger"

export class CreateUniversidadeDto {
    @ApiProperty()
    nombre:              string

    @ApiProperty()
    direccion:           string

    @ApiProperty()
    telefono:            string
  
}
