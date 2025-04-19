import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Content } from "src/entities/content.entity";
import { Repository } from "typeorm";
import { CreateContentDto } from "./dto/create-content.dto";

@Injectable()
export class ContentRepository {
    constructor(@InjectRepository(Content) private readonly contentRepository: Repository<Content>) {}

     createContent(createContentDto: CreateContentDto) {
        const newContent = this.contentRepository.create(createContentDto);
        if(!newContent){
            throw new BadRequestException('No se pudo crear el contenido')
        }
        this.contentRepository.save(newContent);

        return newContent;
      }
    
      findAllContent() {
        const contentAll = this.contentRepository.find();
        if(!contentAll){
            throw new BadRequestException('No se encontraron contenidos')
        }
        return contentAll;
      }
    
      findOneContent(id: string) {
        const content= this.contentRepository.findOne({where:{id}});
        if(!content){
            throw new BadRequestException('No se encontro el contenido')
        }
        return content;
      }
    
      updateContent(id: string, updateContentDto) {
        const content= this.contentRepository.update(id, updateContentDto);
        return `This action updates a #${id} content`;
      }
    
      removeContent(id: string) {
        this.contentRepository.delete(id);
        return `This action removes a #${id} content`;
      }

    
}
