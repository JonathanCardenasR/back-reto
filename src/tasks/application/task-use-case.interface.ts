import { TaskDto } from '../infrastructure/dto/task.dto';

export interface ITaskUseCaseService {
  getAllTasks(): Promise<TaskDto[]>;
  createTask(newTask: TaskDto): Promise<IResponse>;
  updateTask(id: number, task: TaskDto): Promise<IResponse>;
  deleteTask(id: number): Promise<IResponse>;
}

export interface IResponse {
  message: string;
  code: number;
}
