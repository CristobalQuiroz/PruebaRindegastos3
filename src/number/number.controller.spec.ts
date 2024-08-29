import { Test, TestingModule } from '@nestjs/testing';
import { NumberController } from './number.controller';

describe('NumberController', () => {
  let controller: NumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumberController],
    }).compile();

    controller = module.get<NumberController>(NumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
