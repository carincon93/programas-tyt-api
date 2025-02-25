import { PartialType } from '@nestjs/swagger';
import { CreateUniversidadeDto } from './create-universidade.dto';

export class UpdateUniversidadeDto extends PartialType(CreateUniversidadeDto) {}
