import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Content } from "src/entities/content.entity";
import { Repository } from "typeorm";

@Injectable()
export class ContentRepository {
    constructor(@InjectRepository(Content) private readonly contentRepository: Repository<Content>) {}


    
}
