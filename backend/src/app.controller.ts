import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('tasks')
export class AppController {
  private tasks: any[] = [];

  @Get()
  getTasks() {
    return this.tasks;
  }

  @Post()
  addTask(@Body() body: any) {
    const newTask = { title: body.title };
    this.tasks.push(newTask);
    return newTask;
  }
}