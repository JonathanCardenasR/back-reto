import {
  ITaskRepositoryModel,
  IcreateTaskRepositoryModel,
  IupdateTaskRepositoryModel,
} from '../models/task-repository.model';

export interface ICrudTaskRepository {
  getAllTasks(): Promise<ITaskRepositoryModel[]>;
  createTask(newTask: IcreateTaskRepositoryModel): Promise<void>;
  updateTask(id: number, task: IupdateTaskRepositoryModel): Promise<void>;
  deleteTask(id: number): Promise<void>;
}
