import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CharacterController } from "./controllers/character/character.controller";
import { Character } from "./entities/character.entity";
import { CharacterRepositoryService } from "./repository/character-repository/character-repository.service";
import { CharacterService } from "./services/character/character.service";

@Module({
  imports: [TypeOrmModule.forFeature([Character])],
  controllers: [CharacterController],
  providers: [CharacterService, CharacterRepositoryService],
})
export class CharacterModule {}
