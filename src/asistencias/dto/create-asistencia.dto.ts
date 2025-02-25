import { ApiProperty } from "@nestjs/swagger"

export class CreateAsistenciaDto {
    @ApiProperty()
    nota: number

    @ApiProperty()
    fecha: string

    @ApiProperty()
    observacion:  string

    @ApiProperty()
    estudianteId: number

    @ApiProperty()
    asignaturaId: number
}
