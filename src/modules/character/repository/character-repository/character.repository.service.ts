import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/core/models/base.repository';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Character } from '../../entities/character.entity';
@Injectable()
export class CharacterRepositoryService implements BaseRepository<Character> {
  constructor(
    @InjectRepository(Character)
    private readonly repository: Repository<Character>,
  ) {}
  get(): Promise<Character[]> {
    return this.repository.find();
  }
  getById(id: string): Promise<Character> {
    return this.repository.findOneBy({ id });
  }
  exists(name: string, id?: string): Promise<boolean> {
    if (id) {
      return this.repository
        .createQueryBuilder()
        .where('name = :name', { name })
        .andWhere('id != :id', { id })
        .getCount()
        .then((count) => count > 0);
    }
    return this.repository.exists({ where: { name } });
  }

  create(body: Character): Promise<Character> {
    return this.repository.save(body);
  }
  update(id: string, body: Character): Promise<UpdateResult> {
    return this.repository.update(id, body);
  }
  delete(id: string): Promise<DeleteResult> {
    return this.repository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}
