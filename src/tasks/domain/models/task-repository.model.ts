export interface ITaskRepositoryModel {
  id: number;
  name: string;
  state: boolean;
}

export type IcreateTaskRepositoryModel = Omit<ITaskRepositoryModel, 'id'>;

export type IupdateTaskRepositoryModel = Omit<ITaskRepositoryModel, 'id'>;
