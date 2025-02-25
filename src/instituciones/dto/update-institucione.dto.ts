import { PartialType } from '@nestjs/swagger';
import { CreateInstitucioneDto } from './create-institucione.dto';

export class UpdateInstitucioneDto extends PartialType(CreateInstitucioneDto) {}
