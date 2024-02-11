import { DeleteResult } from "typeorm";

export interface BaseRepository<T> {
  get(): Promise<T[]>;
  getById(id: string): Promise<T>;
  create(body: T): Promise<T>;
  update(body: T): Promise<T>;
  delete(id: string): Promise<DeleteResult>;
}
