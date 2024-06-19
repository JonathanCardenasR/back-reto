import { Inject, Injectable } from '@nestjs/common';
import { OrmTaskRepository } from '../../../commons/domain/repository/orm-task.repository';
import { IOrmTaskRepository } from '../../../commons/domain/repository/orm-task.repository.interface';
import { ICrudTaskRepository } from './task.interface';
import {
  ITaskRepositoryModel,
  IcreateTaskRepositoryModel,
} from '../models/task-repository.model';

@Injectable()
export class TaskRepository implements ICrudTaskRepository {
  constructor(
    @Inject(OrmTaskRepository)
    private readonly ormTaskRepository: IOrmTaskRepository,
  ) {}

  async getAllTasks(): Promise<ITaskRepositoryModel[]> {
    const allTasks = await this.ormTaskRepository.getAllTasks();

    return allTasks.map((task) => ({
      id: task.id,
      name: task.name,
    }));
  }

  async createTask(newTask: IcreateTaskRepositoryModel): Promise<void> {
    await this.ormTaskRepository.createTask(newTask);
  }

  async updateTask(id: number, task: ITaskRepositoryModel): Promise<void> {
    await this.ormTaskRepository.updateTask(id, task);
  }

  async deleteTask(id: number): Promise<void> {
    await this.ormTaskRepository.deleteTask(id);
  }
}
