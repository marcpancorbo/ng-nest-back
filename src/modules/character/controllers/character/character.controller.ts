import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { DeleteResult } from "typeorm";
import { CharacterDto } from "../../models/characterDto";
import { CharacterService } from "../../services/character/character.service";

@Controller("character")
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  async get(): Promise<CharacterDto[]> {
    const character = await firstValueFrom(this.characterService.get());
    return character;
  }

  @Get(":id")
  async getById(@Param("id") id: string): Promise<CharacterDto> {
    const character = await firstValueFrom(this.characterService.getById(id));
    return character;
  }
  @Post()
  async create(@Body() body: CharacterDto): Promise<CharacterDto> {
    const character = await firstValueFrom(this.characterService.create(body));
    return character;
  }
  @Put()
  async update(body: CharacterDto): Promise<CharacterDto> {
    const character = await firstValueFrom(this.characterService.update(body));
    return character;
  }
  @Delete(":id")
  async delete(@Param("id") id: string): Promise<DeleteResult> {
    return await firstValueFrom(this.characterService.delete(id));
  }
}
