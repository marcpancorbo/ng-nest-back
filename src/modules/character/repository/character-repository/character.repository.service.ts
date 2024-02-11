import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'src/core/models/base.repository';
import { DeleteResult, Repository } from 'typeorm';
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
  create(body: Character): Promise<Character> {
    return this.repository.save(body);
  }
  update(body: Character): Promise<Character> {
    return this.repository.save(body);
  }
  delete(id: string): Promise<DeleteResult> {
    return this.repository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute();
  }
}
