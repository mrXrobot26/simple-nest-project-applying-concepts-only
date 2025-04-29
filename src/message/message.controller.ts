import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './DTOs/create-message.dto';
import { MessageService } from './message.service';
@Controller('message')
export class MessageController {
  constructor(public messageService: MessageService) {}
  @Get()
  listAllMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.contant);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if(!message) {
      return new NotFoundException('Message not found');
    }
    return message;
  }
}
