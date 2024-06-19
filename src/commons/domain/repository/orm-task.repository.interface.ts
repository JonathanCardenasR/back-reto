import {
  IGetTaskRepositoryDto,
  ITaskRepositoryDto,
} from '../dto/task-repository.dto';

export interface IOrmTaskRepository {
  getAllTasks(): Promise<IGetTaskRepositoryDto[]>;
  createTask(newTask: ITaskRepositoryDto): Promise<void>;
  updateTask(id: number, task: ITaskRepositoryDto): Promise<void>;
  deleteTask(id: number): Promise<void>;
}
