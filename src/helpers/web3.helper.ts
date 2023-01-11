import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const network = process.env.ETHEREUM_NETWORK;
const nftNetwork = process.env.INFURA_NFT_NETWORK;

const apiKey = process.env.INFURA_API_KEY;
const clientSecret = process.env.INFURA_API_KEY_SECRET;
const encodedData = Buffer.from(apiKey + ':' + clientSecret).toString('base64');
const authorizationHeaderString = { Authorization: 'Basic ' + encodedData };

const headers = {
  'user-agent': 'axios/0.18.2',
  'Content-Type': 'application/json',
};

export class Web3Helper {
  static sendRequest(payload) {
    return axios.post(`${network}/${apiKey}`, payload, {
      headers: headers,
    });
  }

  static getOwners(address) {
    return axios
      .get(`${nftNetwork}/${address}/owners`, {
        headers: authorizationHeaderString,
      })
      .then((result) => {
        return result.data.owners.map((owner) => {
          return { address: owner.ownerOf };
        });
      })
      .catch((err) => {
        console.log('error is : ', err);
      });
  }

  static getBalance(payload) {
    return axios
      .post(`${network}/${apiKey}`, payload, {
        headers: headers,
      })
      .then((result) => {
        return result.data.map((bal: { result: string }) => {
          return { balance: parseInt(bal.result, 16) };
        });
      })
      .catch((err) => {
        console.log('error is : ', err);
      });
  }
}
