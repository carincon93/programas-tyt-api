import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateProfesorDto {
  @ApiProperty()
  user: CreateUserDto;

  @ApiProperty()
  universidadId: number;
}
