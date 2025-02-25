import { ApiProperty } from "@nestjs/swagger"

export class CreateEstudianteDto {
    @ApiProperty()
    institucionId: number
  
    @ApiProperty()
    grupoId: number
}
