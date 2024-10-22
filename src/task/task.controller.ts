import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ITask } from './task.interface';
import { TaskService } from './task.service';
import { CreateClassDto } from './dto/create-task.dto';

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
  @UsePipes(new ValidationPipe())
  @Post()
  createTask(@Body() task: CreateClassDto): ITask {
    return this.taskService.createTask(task);
  }
}
