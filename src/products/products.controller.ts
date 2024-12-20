import { Body, Controller, Delete, Get, Param, Post,Put,UsePipes ,ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import {CreateProductDto} from '../dto/product.dto'
import { Prisma } from '@prisma/client';

@Controller('products')
export class ProductsController {
    constructor(private readonly ProductsService: ProductsService) {}

    @Get()
    getHello(): string {
        return this.ProductsService.gethellow();
      }


@Post("AddProduct")
async CreateProducthandler (@Body() createCategoryDto:Prisma.productsCreateInput, req: Request) {
  return this.ProductsService.AddProductHandler(createCategoryDto,req);
}


@Get("GetAllProducts")
async getAllProducts(){
  return this.ProductsService.getAllProducts()
}


@Put("edit_product/:id")
async edit_product(@Param("id") id: number, @Body() updated_product:Prisma.productsUpdateInput,req: Request){
  return this.ProductsService.UpdateProductHandler(+id, updated_product,req)
}


@Delete("delete_product/:id")
async DeleteProductHanlder(@Param("id") id: number, ){
  return this.ProductsService.DeleteProductHanlder(+id)
}

}
