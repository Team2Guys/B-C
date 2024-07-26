import { Body, Controller, Get, Post,UsePipes ,ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import {CreateProductDto} from '../dto/product.dto'

@Controller('products')
export class ProductsController {
    constructor(private readonly ProductsService: ProductsService) {}

    @Get()
    getHello(): string {
        return this.ProductsService.gethellow();
      }


@Post("AddProduct")
async CreateProducthandler (@Body() createCategoryDto:CreateProductDto) {
  return this.ProductsService.AddProductHandler(createCategoryDto);
}


@Get("GetAllProducts")
async getAllProducts(){
  return this.ProductsService.getAllProducts()
}



}
