import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  RmqContext,
  Ctx,
  Payload,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('hello')
  async hello(@Payload() data: string, @Ctx() context: RmqContext) {
    console.log('ctx', context);
    const channel = context.getChannelRef();
    const message = context.getMessage();

    console.log('data', data, channel, message);

    return this.appService.hello(data);
  }
}