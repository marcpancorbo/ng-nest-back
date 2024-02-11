import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable, from } from "rxjs";
import { BaseRepository } from "src/core/models/base_repository";
import { DeleteResult, Repository } from "typeorm";
import { Character } from "../../entities/character.entity";
@Injectable()
export class CharacterRepositoryService implements BaseRepository<Character> {
  constructor(
    @InjectRepository(Character)
    private readonly repository: Repository<Character>,
  ) {}
  get(): Observable<Character[]> {
    return from(this.repository.find());
  }
  getById(id: string): Observable<Character> {
    return from(this.repository.findOneBy({ id }));
  }
  create(body: Character): Observable<Character> {
    return from(this.repository.save(body));
  }
  update(body: Character): Observable<Character> {
    return from(this.repository.save(body));
  }
  delete(id: string): Observable<DeleteResult> {
    return from(this.repository.delete(id));
  }
}
