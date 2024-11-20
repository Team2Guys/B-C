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

  @Delete("deleteCategory/:id")
  DeleteCategoryHandler(@Param("id") id: number) {
    return this.CategoriesService.DelCategoryhandle(+id);
  }
  @Put('updateCategory/:id')
  UpdateCategoryHanlder(@Param('id') id: number, @Body() updateCategoryDto: Prisma.CategoriesUpdateInput) {
    console.log(updateCategoryDto,)
    return this.CategoriesService.CategoryUpdateHandler(+id, updateCategoryDto)
  }


  @Get("getAllCategories")
  getAllCategories() {
    return this.CategoriesService.getAllCategories()
  }


  // Sub Categories
  @Post("Addsubcategory")
  Addsubcategory(@Body() createCategorydto: Prisma.SubCategoriesCreateInput) {
    return this.CategoriesService.AddsubCategoryHandler(createCategorydto)
  }

  @Delete("deletesubCategory/:id")
  deletesubCategory(@Param("id") id: number) {
    let convertedId = typeof (id) == "string" ? parseInt(id) : id
    return this.CategoriesService.DelsubCategoryhandle(convertedId);
  }


  @Put('updatesubCategory/:id')
  updatesubCategory(@Param('id') id: number, @Body() subCategory_update_data: Prisma.SubCategoriesUpdateInput) {
    let convertedId = typeof (id) == "string" ? parseInt(id) : id
    console.log(subCategory_update_data, "subCategory_update_data")
    return this.CategoriesService.UpdatesubCategoryhandle(convertedId, subCategory_update_data)
  }

  @Get("get-all-subCategories")
  getAllsubCategories() {
    return this.CategoriesService.getsubAllCategories()
  }





}
