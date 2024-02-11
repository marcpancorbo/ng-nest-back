import { Injectable } from '@nestjs/common';
import { CharacterDto } from '../../models/characterDto';
import { CharacterRepositoryService } from '../../repository/character-repository/character.repository.service';

@Injectable()
export class CharacterService {
  constructor(private readonly repository: CharacterRepositoryService) {}

  async get(): Promise<CharacterDto[]> {
    return await this.repository.get();
  }

  async getById(id: string): Promise<CharacterDto> {
    return await this.repository.getById(id);
  }

  async create(body: CharacterDto): Promise<CharacterDto> {
    return await this.repository.create(body);
  }

  async update(body: CharacterDto): Promise<CharacterDto> {
    return await this.repository.update(body);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
