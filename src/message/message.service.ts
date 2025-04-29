import { Injectable } from '@nestjs/common';
import { MessageReposatory } from './message.repository';
@Injectable()
export class MessageService {
  constructor(public messageReposatory: MessageReposatory) {}
  async findOne(id: string) {
    const message = await this.messageReposatory.findOne(id);
    return message;
  }

  async findAll() {
    const messages = await this.messageReposatory.findAll();
    return messages;
  }

  async create(message: string) {
    const messages = await this.messageReposatory.createMessage(message);
    return messages;
  }
}
