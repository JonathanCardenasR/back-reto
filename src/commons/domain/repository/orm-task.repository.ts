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
}
