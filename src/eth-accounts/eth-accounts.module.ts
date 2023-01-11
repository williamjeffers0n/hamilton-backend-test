import { Module } from '@nestjs/common';
import { EthAccountsController } from './eth-accounts.controller';
import { EthAccountsService } from './eth-accounts.service';

@Module({
  controllers: [EthAccountsController],
  providers: [EthAccountsService],
})
export class EthAccountsModule {}
