import { PartialType } from '@nestjs/swagger';
import { CreateProfesoreDto } from './create-profesore.dto';

export class UpdateProfesoreDto extends PartialType(CreateProfesoreDto) {}
