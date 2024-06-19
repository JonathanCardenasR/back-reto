import { TaskDto } from '../infrastructure/dto/task.dto';

export interface ITaskUseCaseService {
  getAllTasks(): Promise<TaskDto[]>;
  createTask(newTask: TaskDto): Promise<IResponse>;
}

export interface IResponse {
  message: string;
  code: number;
}
