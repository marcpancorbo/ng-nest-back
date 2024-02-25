import { CharacterRace } from '../enum/character-race';

export interface CharacterDto {
  id: string;
  name: string;
  race: CharacterRace;
  power: number;
  imageUrl: string;
}
