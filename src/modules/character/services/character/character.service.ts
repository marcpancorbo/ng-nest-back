import { Injectable } from "@nestjs/common";
import { CharacterDto } from "../../models/characterDto";
import { CharacterRepositoryService } from "../../repository/character-repository/character-repository.service";
import { Observable } from "rxjs";
import { DeleteResult } from "typeorm";

@Injectable()
export class CharacterService {
  constructor(private readonly repository: CharacterRepositoryService) {}

  get(): Observable<CharacterDto[]> {
    return this.repository.get();
  }

  getById(id: string): Observable<CharacterDto> {
    return this.repository.getById(id);
  }

  create(body: CharacterDto): Observable<CharacterDto> {
    return this.repository.create(body);
  }

  update(body: CharacterDto): Observable<CharacterDto> {
    return this.repository.update(body);
  }

  delete(id: string): Observable<DeleteResult> {
    return this.repository.delete(id);
  }
}
