import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateMessageDto } from './DTOs/create-message.dto';

@Controller('message')
export class MessageController {
  @Get()
  listAllMessages() {}

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
