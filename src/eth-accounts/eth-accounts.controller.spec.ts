import { Test, TestingModule } from '@nestjs/testing';
import { EthAccountsController } from './eth-accounts.controller';

describe('EthAccountsController', () => {
  let controller: EthAccountsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EthAccountsController],
    }).compile();

    controller = module.get<EthAccountsController>(EthAccountsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
