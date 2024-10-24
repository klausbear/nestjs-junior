import { ITask, Status } from './task.interface';

export class Task implements ITask {
  task: string;
  id = new Date().getTime();
  status: Status = Status.CREATED;
  tags: string[] = [];
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  constructor(task: string, tags?: string[], status?: Status) {
    this.task = task;
    this.tags = tags;
    this.status = status;
  }
}
