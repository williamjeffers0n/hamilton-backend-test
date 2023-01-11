import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EthAccountsModule } from './eth-accounts/eth-accounts.module';

@Module({
  imports: [EthAccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
