import { Injectable } from '@nestjs/common';
import { Web3Helper } from 'src/helpers/web3.helper';
import { EthAccount } from './interfaces/eth-account.interface';
import { EthBalance } from './interfaces/eth-balance.interface';

@Injectable()
export class EthAccountsService {
  async findAllOwners(): Promise<EthAccount[]> {
    const ownerBAYC = await Web3Helper.getOwners(
      '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
    );

    const ownerCOOL = await Web3Helper.getOwners(
      '0x1A92f7381B9F03921564a437210bB9396471050C',
    );
    const result = ownerBAYC.filter((c) =>
      ownerCOOL.some((s) => s.address === c.address),
    );
    return result;
  }

  async getBalance(address: string): Promise<EthBalance> {
    const payload = [
      {
        jsonrpc: '2.0',
        method: 'eth_getBalance',
        params: [address, 'latest'],
        id: 1,
      },
    ];
    return await Web3Helper.getBalance(payload);
  }
}
