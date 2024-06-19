export interface ITaskRepositoryModel {
  id: number;
  name: string;
}

export type IcreateTaskRepositoryModel = Omit<ITaskRepositoryModel, 'id'>;

export type IupdateTaskRepositoryModel = Omit<ITaskRepositoryModel, 'id'>;
