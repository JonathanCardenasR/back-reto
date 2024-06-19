import {
  IGetTaskRepositoryDto,
  ITaskRepositoryDto,
} from '../dto/task-repository.dto';

export interface IOrmTaskRepository {
  getAllTasks(): Promise<IGetTaskRepositoryDto[]>;
  createTask(newTask: ITaskRepositoryDto): Promise<void>;
}
