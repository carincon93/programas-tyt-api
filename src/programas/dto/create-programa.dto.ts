import { ApiProperty } from "@nestjs/swagger"

export class CreateProgramaDto {
    @ApiProperty()
    nombre:              string
 
    @ApiProperty()
    universidadId:       number
}
