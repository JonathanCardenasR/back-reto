import { DataSource, Repository } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { IOrmTaskRepository } from './orm-task.repository.interface';
import { IGetTaskRepositoryDto } from '../dto/task-repository.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrmTaskRepository
  extends Repository<TaskEntity>
  implements IOrmTaskRepository
{
  constructor(dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }

  async getAllTasks(): Promise<IGetTaskRepositoryDto[]> {
    return await this.find();
  }

  async createTask(newTask: IGetTaskRepositoryDto): Promise<void> {
    await this.save(newTask);
  }

  async updateTask(id: number, task: IGetTaskRepositoryDto): Promise<void> {
    const taskToUpdate = await this.findOneBy({ id });
    if (!taskToUpdate) throw new Error('Task not found');
    const updatedTask = this.merge(taskToUpdate, task);
    await this.save(updatedTask);
  }

  async deleteTask(id: number): Promise<void> {
    await this.delete(id);
  }
}
