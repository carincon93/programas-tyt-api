import { Test, TestingModule } from '@nestjs/testing';
import { AsignaturaGrupoService } from './asignatura-grupo.service';

describe('AsignaturaGrupoService', () => {
  let service: AsignaturaGrupoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsignaturaGrupoService],
    }).compile();

    service = module.get<AsignaturaGrupoService>(AsignaturaGrupoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
