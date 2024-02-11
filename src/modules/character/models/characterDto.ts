import { CharacterRace } from '../enum/character_race';

export interface CharacterDto {
  id: string;
  name: string;
  race: CharacterRace;
  power: number;
}
