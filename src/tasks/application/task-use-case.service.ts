import { Inject, Injectable } from '@nestjs/common';
import { IResponse, ITaskUseCaseService } from './task-use-case.interface';
import { TaskDto } from '../infrastructure/dto/task.dto';
import { TaskRepository } from '../domain/repository/task.repository';
import { ICrudTaskRepository } from '../domain/repository/task.interface';

@Injectable()
export class TaskUseCaseService implements ITaskUseCaseService {
  constructor(
    @Inject(TaskRepository)
    private readonly taskRepository: ICrudTaskRepository,
  ) {}

  async getAllTasks(): Promise<TaskDto[]> {
    const tasks = await this.taskRepository.getAllTasks();
    return tasks.map((task) => task);
  }

  async createTask(newTask: TaskDto): Promise<IResponse> {
    await this.taskRepository.createTask(newTask);
    return { message: 'Task created', code: 200 };
  }
}
