import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('RABBIT_MQ') private client: ClientProxy,
  ) {}

  send<T>(pattern: string, data: T) {
    return this.client.send(pattern, data).toPromise();
  }
}