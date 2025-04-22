import { BadRequestException, Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CategoriesService } from "./categories.service";

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService){}
    
    @Get('/user/:id')
    async getAllCategories(@Param('id') id: string) {
        try{

            return await this.categoriesService.getAllCategories(id);
        } catch(e){
            throw new BadRequestException('error al obtener las categorias '+ e);
        }
    }
    @Post()
    async createCategory(@Body()dataCategory) {
        try{
            return await this.categoriesService.createCategory(dataCategory);

        } catch(e){
            throw new BadRequestException('error al crear la categoria '+ e);
        }
    }
}