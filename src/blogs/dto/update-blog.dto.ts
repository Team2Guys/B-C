import { PartialType } from '@nestjs/swagger';
import { CreateBlogDto } from './create-blog.dto';
import { BlogStatus } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}
export class UpdateStatusDto {
  @IsEnum(BlogStatus, {
    message: 'Status must be one of PENDING, WORKING, COMPLETED, ARCHIVED',
  })
  status: BlogStatus;
}
