import {
  ITaskRepositoryModel,
  IcreateTaskRepositoryModel,
} from '../models/task-repository.model';

export interface ICrudTaskRepository {
  getAllTasks(): Promise<ITaskRepositoryModel[]>;
  createTask(newTask: IcreateTaskRepositoryModel): Promise<void>;
}
