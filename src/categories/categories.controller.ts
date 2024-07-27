import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { createCategorydto } from '../dto/category.dto'
import { Prisma } from '@prisma/client';
import { get } from 'http';


@Controller('categories')
export class CategoriesController {
  constructor(private readonly CategoriesService: CategoriesService) { }
  @Get()
  getHello(): string {
    return this.CategoriesService.getHello();
  }

  @Post("AddCategory")
  addCategoryes(@Body() createCategorydto: Prisma.CategoriesCreateInput) {
    return this.CategoriesService.AddcategoryHandler(createCategorydto)
  }

  @Delete("deleteCategory:id")
  DeleteCategoryHandler(@Param("id") id: number) {
    return this.CategoriesService.DelCategoryhandle(id);
  }
  @Put('updateCategory:id')
  UpdateCategoryHanlder(@Param('id') id: number, updateCategoryDto: Prisma.CategoriesUpdateInput) {
    return this.CategoriesService.CategoryUpdateHandler(id, updateCategoryDto)
  }
  @Get()
  getAllCategories() {
    return this.CategoriesService.getAllCategories()
  }


}
