import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomErrorHandler, getStatusNameByCode } from '../utils/helperFunctions';
import { CreateCommentDto } from './dto/create-comments.dto';
import { NotFoundError } from 'rxjs';




@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) { }




  async create(createBlogDto: Prisma.blogsCreateInput) {


    let existing_blog = await this.prisma.blogs.findFirst({ where: { title: createBlogDto.title } })
    if (existing_blog) return CustomErrorHandler("Blog is Already Exists", 'BAD_REQUEST')
    const blog = await this.prisma.blogs.create({
      data: createBlogDto
    })
    return { message: "blog has been Created", blog };


  }

  async findAll() {
    try {
      const blogs = await this.prisma.blogs.findMany({ include:{comments: true}})
      return blogs
    } catch (error) {
      return CustomErrorHandler(error.message, 'BAD_REQUEST')
    }


  }

  async findOne(id: number) {
    try {
      const blog = await this.prisma.blogs.findUnique({ where: { id: id }, include:{comments: true} })
      return blog;
    } catch (error) {
      return CustomErrorHandler(error.message, 'BAD_REQUEST')
    }

  }

  async update(id: number, updateBlogDto: Prisma.blogsUpdateInput) {
    try {
      const updated_blog = await this.prisma.blogs.update({ where: { id: id }, data: updateBlogDto },)

      if (!updateBlogDto) return CustomErrorHandler("Not Blog found", "BAD_REQUEST")

      return {
        message: "Blog has been updated",
        updated_blog
      }
    } catch (error) {
      return CustomErrorHandler(error.message, 'BAD_REQUEST')

    }


  }

  async remove(id: number) {
    try {

      let existing_blog = await this.prisma.blogs.findUnique({ where: { id: id } })
      if (!existing_blog) return CustomErrorHandler("No Blog found", "BAD_REQUEST")

      return { message: "Blog has been Deleted", blog: await this.prisma.blogs.delete({ where: { id: id } }) }

    } catch (error) {
      return CustomErrorHandler(error.message, 'BAD_REQUEST')

    }


  }

  async addComment(blog_id: number, createCommentDto: CreateCommentDto) {
    try {
      const { name, email, description } = createCommentDto;
      const blog = await this.prisma.blogs.findUnique({
        where: { id: blog_id }
      });

      if (!blog) return CustomErrorHandler("Invalid Blog Id", 'NOT_FOUND');

      const newComment = await this.prisma.blogs_comments.create({
        data: {
          name: name,
          Email: email,
          description: description,
          replies: [],
          blog: {
            connect: { id: blog_id }
          }
        },
      });
      return newComment;
    } catch (error) {
      console.log(error.status, "error")
      let flag = error.status && error.status
      return CustomErrorHandler(error.message, flag ? getStatusNameByCode(error.status) : 'BAD_REQUEST');
    }
  }



  async addReply(comment_id: number, reply: CreateCommentDto) {
    try {
      const existingComment = await this.prisma.blogs_comments.findUnique({
        where: { id: comment_id },
        select: { replies: true },
      });

      if (!existingComment) {
        new NotFoundException("comments not found")
      }
      
      const replyObject = {
        name: reply.name,
        Email: reply.email,
        description: reply.description,
        createdAt: new Date()
      };


      const updatedReplies = [...existingComment.replies, replyObject];

      const updatedComment = await this.prisma.blogs_comments.update({
        where: { id: comment_id },
        data: {
          replies: updatedReplies,
        },
      });

      return updatedComment;
    } catch (error) {
      let flag = error.status && error.status
      return CustomErrorHandler(error.message, flag ? getStatusNameByCode(error.status)  : 'BAD_REQUEST');
    }
  }





}
