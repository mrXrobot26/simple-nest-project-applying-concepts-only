import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageReposatory {
  private async getMessages(): Promise<Record<string, any>> {
    try {
      if (!existsSync('messages.json')) {
        await writeFile('messages.json', JSON.stringify({}));
        return {};
      }
      const content = await readFile('messages.json', 'utf-8');
      return content ? JSON.parse(content) : {};
    } catch (error) {
      return {};
    }
  }

  async findOne(id: string) {
    const messages = await this.getMessages();
    return messages[id];
  }

  async findAll() {
    const messages = await this.getMessages();
    return messages;
  }

  async createMessage(message: string) {
    const messages = await this.getMessages();
    const id = Math.floor(Math.random() * 1000).toString();
    messages[id] = { id, message };
    await writeFile('messages.json', JSON.stringify(messages));
    return messages[id];
  }
}
