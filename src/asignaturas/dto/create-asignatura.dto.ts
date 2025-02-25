import { ApiProperty } from "@nestjs/swagger"

export class CreateAsignaturaDto {
    @ApiProperty()
    nombre: string
}
