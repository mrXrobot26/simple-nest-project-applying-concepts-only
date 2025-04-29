import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MessageReposatory } from './message.repository';

@Module({
  controllers: [MessageController],
  providers: [MessageService, MessageReposatory],
})
export class MessageModule {}
