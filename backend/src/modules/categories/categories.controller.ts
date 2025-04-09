import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CategoriesService } from "./categories.service";

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService){}
    
    @Get('/user/:id')
    async getAllCategories(@Param('id') id: string) {
        return await this.categoriesService.getAllCategories(id);
    }
    @Post()
    async createCategory(@Body()dataCategory) {
        return await this.categoriesService.createCategory(dataCategory);
    }
}