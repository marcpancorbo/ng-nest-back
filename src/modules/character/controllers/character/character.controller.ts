import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CharacterDto } from '../../models/characterDto';
import { CharacterService } from '../../services/character/character.service';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  get(): Promise<CharacterDto[]> {
    return this.characterService.get();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<CharacterDto> {
    return this.characterService.getById(id);
  }
  @Post()
  create(@Body() body: CharacterDto): Promise<CharacterDto> {
    return this.characterService.create(body);
  }
  @Put()
  update(body: CharacterDto): Promise<CharacterDto> {
    return this.characterService.update(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.characterService.delete(id);
  }
}
