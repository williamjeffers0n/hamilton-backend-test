import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { TransformResponseInterceptor } from 'src/interceptors/transform-response.interceptor';
import { EthAccountsService } from './eth-accounts.service';
import { EthAccount } from './interfaces/eth-account.interface';
import { EthBalance } from './interfaces/eth-balance.interface';

@Controller('eth-accounts')
@UseInterceptors(TransformResponseInterceptor)
export class EthAccountsController {
  constructor(private ethAccountsService: EthAccountsService) {}

  @Get()
  async findAll(): Promise<EthAccount[]> {
    return this.ethAccountsService.findAllOwners();
  }

  /*
   * Example: http://localhost:3000/eth-accounts/balance?address=0xee0046b3b5ab5f4495b13496652bd83779b64b5e
   */
  @Get('balance')
  async getBalance(@Query('address') address: string): Promise<EthBalance> {
    return this.ethAccountsService.getBalance(address);
  }
}
