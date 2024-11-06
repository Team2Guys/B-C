import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Prisma } from '@prisma/client';
import { CreateCommentDto } from './dto/create-comments.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) { }


  @Post("/create_blog")
  create(@Body() createBlogDto: Prisma.blogsCreateInput) {
    return this.blogsService.create(createBlogDto);
  }

  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  @Get('get_blog/:id')
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateBlogDto: Prisma.blogsUpdateInput) {
    return this.blogsService.update(+id, updateBlogDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.blogsService.remove(+id);
  }

  @Post("addComments/:id")
  Addcomments(@Param('id') id: string, @Body() Comment: CreateCommentDto) {
    return this.blogsService.addComment(+id, Comment)
  }


  @Post("addReply/:id")
  Addreply(@Param('id') id: string, @Body() reply: CreateCommentDto) {
    return this.blogsService.addReply(+id, reply)
  }



}
