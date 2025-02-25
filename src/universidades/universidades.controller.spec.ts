import { Test, TestingModule } from '@nestjs/testing';
import { UniversidadesController } from './universidades.controller';
import { UniversidadesService } from './universidades.service';

describe('UniversidadesController', () => {
  let controller: UniversidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniversidadesController],
      providers: [UniversidadesService],
    }).compile();

    controller = module.get<UniversidadesController>(UniversidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
