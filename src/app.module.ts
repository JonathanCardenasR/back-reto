import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { CONFIG_DATABASE } from './commons/infrastructure/config-database';

@Module({
  imports: [CONFIG_DATABASE(), TasksModule],
})
export class AppModule {}
