import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { CategoriesRepository } from '../categories/categories.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from 'src/entities/content.entity';
import { User } from 'src/entities/user.entity';
import { ContentRepository } from './content.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Content, User])],
  controllers: [ContentController],
  providers: [ContentService, ContentRepository],
})
export class ContentModule {}
