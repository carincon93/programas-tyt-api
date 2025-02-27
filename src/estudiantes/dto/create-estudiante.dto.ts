import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateEstudianteDto {
  @ApiProperty()
  user: CreateUserDto;

  @ApiProperty()
  codigoEstudiante: string;

  @ApiProperty()
  institucionId: number;

  @ApiProperty()
  grupoId: number;
}
