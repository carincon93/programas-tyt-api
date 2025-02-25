import { ApiProperty } from "@nestjs/swagger"

export class CreateGrupoDto {
    @ApiProperty()
    programaId:          number
}
