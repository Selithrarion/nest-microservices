import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './services/rabbit-mq/rabbit-mq.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get()
  async get() {
    const payload = [1,2,3,4,5]
    const operations = payload.map(i =>
      this.rabbitMQService.send('hello', this.appService.get(i)),
    );
    return await Promise.all(operations);
  }
}