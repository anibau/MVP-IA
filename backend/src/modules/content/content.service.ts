import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ContentRepository } from './content.repository';

@Injectable()
export class ContentService {
  constructor(private readonly contentRepository: ContentRepository){}
  async create(createContentDto: CreateContentDto) {
    return  this.contentRepository.create(createContentDto);
  }

  async findAll() {
    return this.contentRepository.findAll();
  }

  async findOne(id: string) {
    return this.contentRepository.findOne(id);
  }

  update(id: string, updateContentDto: UpdateContentDto) {
    return this.contentRepository.update(id, updateContentDto);
  }

  remove(id: string) {
    return this.contentRepository.remove(id);
  }
}
