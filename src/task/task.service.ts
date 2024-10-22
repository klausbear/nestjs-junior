import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';
import { Task } from './task.entity';
import { CreateClassDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];
  getTasks(): ITask[] {
    return this.tasks;
  }
  getTaskById(id: string): ITask {
    const task = this.tasks.find((t) => t.id === +id);
    return task;
  }
  createTask({ task, tags, status }: CreateClassDto): ITask {
    const newTask = new Task(task, tags, status);
    this.tasks.push(newTask);
    return newTask;
  }
}
