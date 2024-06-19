export interface ITaskRepositoryDto {
  name: string;
  state: boolean;
}

export interface IGetTaskRepositoryDto extends ITaskRepositoryDto {
  id: number;
}
