import { Module } from "@nestjs/common";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/entities/category.entity";
import { CategoriesRepository } from "./categories.repository";
import { UserRepository } from "../users/user.repository";
import { User } from "src/entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Category, User])],
    controllers: [CategoriesController],
    providers: [CategoriesService, CategoriesRepository, UserRepository],
    exports: [CategoriesService, CategoriesRepository]
})
export class CategoriesModule {}