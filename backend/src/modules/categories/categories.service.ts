import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "./categories.repository";

@Injectable()
export class CategoriesService {
    constructor(private readonly categoriesRepository: CategoriesRepository){}

    async getAllCategories(id:string) {
        return await this.categoriesRepository.getAllCategories(id);
    }

    async createCategory(dataCategory){
        return await this.categoriesRepository.createCategory(dataCategory);
    }
}