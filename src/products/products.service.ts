import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomErrorHandler } from '../utils/helperFunctions';
import { getAllproducts } from '../utils/DbHandlers'
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) { }

    gethellow(): string {
        return 'this is hellow from product';
    }

    AddProductHandler = async (createCategoryDto: Prisma.productsCreateInput) => {
        const { title } = createCategoryDto;

        let AlreadyExistedProduct = await this.prisma.products.findUnique({ where: { title: title } })
        if (AlreadyExistedProduct) return CustomErrorHandler("Product Already Exist", 'BAD_REQUEST')


        try {
            let response = await this.prisma.products.create({
                data: createCategoryDto,
                include: {
                    category: true,
                    subCategory: true
                }
            });
            console.log(response, "response")
            return { product: response, message: "Product has been added Successfully" }
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


    //     UpdateProductHandler = async (id: number, updateProduct: Prisma.productsUpdateInput) => {

    //         try {
    //             let product = await this.prisma.products.findUnique({ where: { id: id }, include: { subCategory: true } })
    //             if (!product) return CustomErrorHandler("product  not found", "NOT_FOUND")


    //                 if (updateProduct.subCategory && updateProduct.subCategory.connect) {

    //                     const newSubCategoryIds = updateProduct.subCategory.connect.map((sub: any) => sub.id);
    //                     const subCategoriesToDisconnect = product?.subCategory
    //                         .filter((sub: any) => !newSubCategoryIds.includes(sub.id))
    //                         .map((sub: any) => ({ id: sub.id }));

    //                     updateProduct.subCategory.disconnect = subCategoriesToDisconnect;
    //                 }


    //             let updated_products = await this.prisma.products.update({
    //                 where: { id: id },
    //                 data: updateProduct,
    //                 include: {subCategory: true, category: true}
    //             })
    // console.log(updateProduct, "updated_product")
    //             return { updated_products, message: "Product has been updated Successfully" }

    //         } catch (error) {
    //             return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'INTERNAL_SERVER_ERROR');

    //         }
    //     }
    UpdateProductHandler = async (id: number, updateProduct: Prisma.productsUpdateInput) => {
        try {

            let product = await this.prisma.products.findUnique({
                where: { id: id },
                include: { subCategory: true },
            });

            if (!product) {
                return CustomErrorHandler("Product not found", "NOT_FOUND");
            }


            if (updateProduct.subCategory && updateProduct.subCategory.connect) {

                const newSubCategoryIds = Array.isArray(updateProduct.subCategory.connect)
                    ? updateProduct.subCategory.connect.map((sub: any) => sub.id)
                    : [updateProduct.subCategory.connect?.id];

                const subCategoriesToDisconnect = product.subCategory
                    .filter((sub: any) => !newSubCategoryIds.includes(sub.id))
                    .map((sub: any) => ({ id: sub.id }));


                updateProduct.subCategory.disconnect = subCategoriesToDisconnect;
            }

            let updated_products = await this.prisma.products.update({
                where: { id: id },
                data: updateProduct,
                include: { subCategory: true, category: true },
            });

            console.log(updateProduct, "updated_product");
            return { updated_products, message: "Product has been updated successfully" };
        } catch (error) {
            return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, "INTERNAL_SERVER_ERROR");
        }
    };





    DeleteProductHanlder = async (id: number) => {
        try {
            let product = await this.prisma.products.findUnique({ where: { id: id } })
            if (!product) return CustomErrorHandler('No Product found', 'NOT_FOUND')

            let delted_products = await this.prisma.products.delete({ where: { id: id } })
            return { delted_products, message: "Product has been deleted Successfully" }


        } catch (error) {
            return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'INTERNAL_SERVER_ERROR');

        }
    }



}
