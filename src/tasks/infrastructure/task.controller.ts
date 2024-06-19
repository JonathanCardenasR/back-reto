import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import {
  ITaskUseCaseService,
  IResponse,
} from '../application/task-use-case.interface';
import { TaskDto } from './dto/task.dto';
import { TaskUseCaseService } from '../application/task-use-case.service';

@Controller('task')
export class TaskController {
  constructor(
    @Inject(TaskUseCaseService)
    private readonly _taskService: ITaskUseCaseService,
  ) {}

  @Get()
  getAllTasks(): Promise<TaskDto[]> {
    return this._taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() task: TaskDto): Promise<IResponse> {
    return this._taskService.createTask(task);
  }
}
