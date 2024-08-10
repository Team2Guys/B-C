import { PrismaService } from '../../prisma/prisma.service';
import { CustomErrorHandler } from '../utils/helperFunctions';
import { createCategorydto } from '../dto/category.dto'
import { Prisma } from '@prisma/client';




const prisma = new PrismaService();


export const getAllproducts = () => {
    try {

        let products = prisma.products.findMany()
        return products;
    } catch (error) {
        console.error('Error fetching products:', error.message); // Log the exact error message
        throw {
            status: 'error',
            message: `Error fetching products: ${error.message}`,
            stack: error.stack,
        };
    }
}


export const CreateCategoryHandler = async (createCategoryDto: Prisma.CategoriesCreateInput) => {
    try {
        const { title, posterImage } = createCategoryDto ;
        let products:any =[]

        let AlreadyExistedProduct = await prisma.categories.findUnique({ where: { title: title } })
        if (AlreadyExistedProduct) return CustomErrorHandler("Category Already Exist", 'BAD_REQUEST');
        let response = await prisma.categories.create({
            data: createCategoryDto 
        });
        return response;


    } catch (error) {
        console.error('Error fetching products:', error.message);
        throw {
            status: 'error',
            message: `Error fetching products: ${error.message}`,
            stack: error.stack,
        };
    }
}

