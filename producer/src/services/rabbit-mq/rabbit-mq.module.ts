import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQService } from './rabbit-mq.service';

@Module({
  imports: [
    ClientsModule.register(
      [
        {
          name: 'RABBIT_MQ',
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://admin:admin@localhost:5672'],
            queue: 'hello',
          },
        },
      ]
    ),
  ],
  controllers: [],
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}