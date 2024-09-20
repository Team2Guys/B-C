import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomErrorHandler } from '../utils/helperFunctions';




@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) { }




  async create(createBlogDto: Prisma.blogsCreateInput) {


    let existing_blog = await this.prisma.blogs.findFirst({ where: { title: createBlogDto.title } })
    if (existing_blog) return CustomErrorHandler("Blog is Already Exists", 'BAD_REQUEST')
    const blog = await this.prisma.blogs.create({
      data: createBlogDto
    })
    return {message: "blog has been Created",blog};


  }

  async findAll() {
    try {
      const blogs = await this.prisma.blogs.findMany()
      return blogs
    } catch (error) {
      return CustomErrorHandler(error.message, 'BAD_REQUEST')
    }


  }

  async findOne(id: number) {
    try {
      const blog = await this.prisma.blogs.findUnique({ where: { id: id } })
      return blog;
    } catch (error) {
      return CustomErrorHandler(error.message, 'BAD_REQUEST')
    }

  }

  async update(id: number, updateBlogDto: Prisma.blogsUpdateInput) {
    try {
      const updated_blog = await this.prisma.blogs.update({ where: { id: id }, data: updateBlogDto })

      if (!updateBlogDto) return CustomErrorHandler("Not Blog found", "BAD_REQUEST")

      return {message: "Blog has been updated",
        updated_blog}
    } catch (error) {
      return CustomErrorHandler(error.message, 'BAD_REQUEST')

    }


  }

  async remove(id: number) {
    try {

      let existing_blog = await this.prisma.blogs.findUnique({ where: { id: id } })
      if (!existing_blog) return CustomErrorHandler("No Blog found", "BAD_REQUEST")

      return {message: "Blog has been Deleted",blog: await this.prisma.blogs.delete({ where: { id: id } })}

    } catch (error) {
      return CustomErrorHandler(error.message, 'BAD_REQUEST')

    }


  }
}
