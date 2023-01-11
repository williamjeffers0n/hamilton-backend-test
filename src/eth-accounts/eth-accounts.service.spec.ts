import { Test, TestingModule } from '@nestjs/testing';
import { EthAccountsService } from './eth-accounts.service';

describe('EthAccountsService', () => {
  let service: EthAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EthAccountsService],
    }).compile();

    service = module.get<EthAccountsService>(EthAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
