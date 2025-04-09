import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "src/entities/category.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoriesRepository {
    constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
@InjectRepository(User) private readonly userRepository: Repository<User>){}

    async getAllCategories(id:string) {
        const categories = await this.categoryRepository.find({where:{user:{id:id}}});
        if(categories.length === 0){
         throw new BadRequestException('No se encontraron categorias para el usuario')
        }
        return categories
    }
    async createCategory(category: Category){
      const newCategory = this.categoryRepository.create(category);
      if(!newCategory){
        throw new BadRequestException('No se pudo crear la categoria')
      }
      await this.categoryRepository.save(newCategory);
      return newCategory
    
    }
}