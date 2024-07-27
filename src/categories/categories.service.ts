import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CustomErrorHandler } from 'src/utils/helperFunctions';
import { CreateCategoryHandler } from 'src/utils/DbHandlers';
import { Prisma } from '@prisma/client';




@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) { }

  getHello(): string {
    return 'Hello World!';
  }

  async AddcategoryHandler(createCategoryDto: Prisma.CategoriesCreateInput) {
    try {
      return await CreateCategoryHandler(createCategoryDto)
    } catch (error: any) {
      console.log(error, "err")
      return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'GATEWAY_TIMEOUT')

    }
  }


  async DelCategoryhandle(id: number) {
    try {

      const category = await this.prisma.categories.findUnique({
        where: { id: id },
      });

      if (!category) {

        return CustomErrorHandler("Category not found", 'NOT_FOUND');
      }

      let response = await this.prisma.categories.delete({
        where: { id: id },
      });

      console.log(response, "response");
      return response;

    } catch (error) {
      return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'INTERNAL_SERVER_ERROR');
    }
  }

  async CategoryUpdateHandler(id:number, updateCategoryDto:Prisma.CategoriesUpdateInput){
    try {
     let category = await this.prisma.categories.findUnique({where:{id:id}}) 
     if(!category) return CustomErrorHandler("Category not found", "NOT_FOUND")
      const updatedCategory = await this.prisma.categories.update({
        where: { id: id },
        data: updateCategoryDto,
      });
     return updatedCategory
    } catch (error) {
      return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'INTERNAL_SERVER_ERROR');

    }

  }
async getAllCategories(){
  try {
    let response = this.prisma.categories.findMany()
    return response;
  } catch (error) {
    return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'INTERNAL_SERVER_ERROR')
  }
}


}




