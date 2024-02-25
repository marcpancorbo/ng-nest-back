import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CharacterDto } from '../../models/characterDto';
import { CharacterService } from '../../services/character/character.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

export const storageConfig = {
  storage: diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    },
  }),
};
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
  @UseInterceptors(FileInterceptor('image', storageConfig))
  create(
    @UploadedFile() image,
    @Body() body: CharacterDto,
  ): Promise<CharacterDto> {
    if (image) {
      const urlImage = `http://localhost:3000/${image.filename}`;
      body.imageUrl = urlImage;
    }
    return this.characterService.create(body);
  }

  @Put()
  @UseInterceptors(FileInterceptor('image', storageConfig))
  update(@UploadedFile() image, body: CharacterDto): Promise<CharacterDto> {
    const urlImage = `http://localhost:3000/${image.filename}`;
    body.imageUrl = urlImage;
    return this.characterService.update(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.characterService.delete(id);
  }
}
