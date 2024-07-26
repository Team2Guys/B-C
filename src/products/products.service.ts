import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomErrorHandler } from 'src/utils/helperFunctions';
import { CreateProductDto } from '../dto/product.dto'
import { getAllproducts } from '../utils/DbHandlers'
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    gethellow(): string {
        return 'this is hellow from product';
    }

    AddProductHandler = async (createCategoryDto: CreateProductDto) => {
        const { title, price, description, imageUrls, posterImage, category } = createCategoryDto;

        let AlreadyExistedProduct = await this.prisma.products.findUnique({ where: { title: title } })
        if (AlreadyExistedProduct) return CustomErrorHandler("Product Already Exist", 'BAD_REQUEST')

        const plainImageUrls = imageUrls.map(url => ({
            imageUrl: url.imageUrl,
            public_id: url.imageUrl
        }));
        const plainPosterImage = {
            imageUrl: posterImage.imageUrl,
            public_id: posterImage.public_id
        };


        try {
            let response = await this.prisma.products.create({
                data: {
                    title, price, description, imageUrls: plainImageUrls, posterImage: plainPosterImage, category
                },
            });
            console.log(response, "response")
            return response;
        } catch (error: any) {
            console.log(error, "err")
            return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'GATEWAY_TIMEOUT')

        }
    }

    getAllProducts = async () => {
        try {
            return await getAllproducts()
        } catch (err) {
            return CustomErrorHandler(`${err.message}`, 'BAD_REQUEST')
        }
    }

    UpdateProductHandler = async (id: number, updateProduct: Prisma.productsUpdateInput) => {
        try {
            let product = await this.prisma.products.findUnique({ where: { id: id } })
            if (!product) return CustomErrorHandler("product  not found", "NOT_FOUND")

            return this.prisma.products.update({
                where: { id: id },
                data: updateProduct
            })

        } catch (error) {
            return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'INTERNAL_SERVER_ERROR');

        }
    }

    DeleteProductHanlder = async (id: number) => {
        try {
            let product = await this.prisma.products.findUnique({ where: { id: id } })
            if (!product) return this.prisma.products.delete({ where: { id: id } })

            return CustomErrorHandler('No Product found', 'NOT_FOUND')

        } catch (error) {
            return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'INTERNAL_SERVER_ERROR');

        }
    }



}
