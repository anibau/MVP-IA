import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ContentRepository } from './content.repository';

@Injectable()
export class ContentService {
  constructor(private readonly contentRepository: ContentRepository){}
  async createContent(createContentDto: CreateContentDto) {
    return  this.contentRepository.createContent(createContentDto);
  }

  async findAllContent() {
    return this.contentRepository.findAllContent();
  }

  async findOneContent(id: string) {
    return this.contentRepository.findOneContent(id);
  }

  updateContent(id: string, updateContentDto: UpdateContentDto) {
    return this.contentRepository.updateContent(id, updateContentDto);
  }

  removeContent(id: string) {
    return this.contentRepository.removeContent(id);
  }
}
