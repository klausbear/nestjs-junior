import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ITask } from './task.interface';
import { Task } from './task.entity';
import { CreateClassDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];
  getTasks(): ITask[] {
    return this.tasks;
  }
  getTaskById(id: number): ITask {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException('task не найдена!');
    }
    return task;
  }
  createTask({ task, email, tags, status }: CreateClassDto): ITask {
    const newTask = new Task(task, email, tags, status);
    this.tasks.push(newTask);
    return newTask;
  }
  getTasksByEmail(email: string): ITask[] {
    const tasks = this.tasks.filter((t) => t.email === email);
    if (!tasks || tasks.length === 0) {
      throw new BadRequestException('Таски не были найдены');
    }
    return tasks;
  }
}
