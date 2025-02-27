import { Test, TestingModule } from '@nestjs/testing';
import { AsignaturaGrupoController } from './asignatura-grupo.controller';
import { AsignaturaGrupoService } from './asignatura-grupo.service';

describe('AsignaturaGrupoController', () => {
  let controller: AsignaturaGrupoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsignaturaGrupoController],
      providers: [AsignaturaGrupoService],
    }).compile();

    controller = module.get<AsignaturaGrupoController>(AsignaturaGrupoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
