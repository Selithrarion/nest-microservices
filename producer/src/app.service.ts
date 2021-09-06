import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  get(item: number | string): string {
    return `Hello ${item}`;
  }
}