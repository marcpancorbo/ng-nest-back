import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CharacterRace } from "../enum/character_race";

@Entity("Character")
export class Character {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column({ default: 0 })
  power: number;
  @Column({ type: "enum", enum: CharacterRace, default: CharacterRace.HUMAN })
  race: CharacterRace;
}
