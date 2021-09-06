import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hello(data: string) {
    return data
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     console.log('hello', data);
    //     resolve({data});
    //   }, 10000);
    // });
  }
}