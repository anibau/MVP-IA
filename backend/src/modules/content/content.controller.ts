import { Controller, Get, Post, Body, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  async create(@Body() createContentDto: CreateContentDto) {
    try{
      return this.contentService.createContent(createContentDto);

    } catch(e){
      throw new BadRequestException('error al crear el contenido '+ e);
    }
  }

  @Get()
  async findAll() {
    try{
      return await this.contentService.findAllContent();

    } catch(error){
      throw new BadRequestException('error al obtener los contenidos '+ error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      return await this.contentService.findOneContent(id);

    } catch(e){
      throw new BadRequestException('error al obtener el contenido '+ e);
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    try{
      return  await this.contentService.updateContent(id, updateContentDto);

    } catch(e){
      throw new BadRequestException('error al actualizar el contenido '+ e);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      return await this.contentService.removeContent(id);

    } catch(e){
      throw new BadRequestException('error al eliminar el contenido '+ e);
    }
  }
}
