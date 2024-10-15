import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  @Get()
  getTasks(): ITask[] {
    return this.taskService.getTasks();
  }
  @Get(':id')
  getTaskById(@Param('id') id: string): ITask {
    return this.taskService.getTaskById(id);
  }
  @Post()
  createTask(@Body('task') task: string): ITask {
    return this.taskService.createTask(task);
  }
}
