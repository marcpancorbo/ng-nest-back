import { DeleteResult, UpdateResult } from 'typeorm';

export interface BaseRepository<T> {
  get(): Promise<T[]>;
  getById(id: string): Promise<T>;
  create(body: T): Promise<T>;
  update(id: string, body: T): Promise<UpdateResult>;
  delete(id: string): Promise<DeleteResult>;
}
