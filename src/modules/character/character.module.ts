import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterController } from './controllers/character/character.controller';
import { Character } from './entities/character.entity';
import { CharacterRepositoryService } from './repository/character-repository/character.repository.service';
import { CharacterService } from './services/character/character.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/core/services/jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Character]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [CharacterController],
  providers: [CharacterService, CharacterRepositoryService, JwtStrategy],
})
export class CharacterModule {}
