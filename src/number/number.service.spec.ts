import { Test, TestingModule } from '@nestjs/testing';
import { NumberService } from './number.service';

describe('NumberService', () => {
  let service: NumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumberService],
    }).compile();

    service = module.get<NumberService>(NumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
