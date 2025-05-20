import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { CustomErrorHandler } from 'src/utils/helperFunctions';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) { }
  async create(createReviewDto: CreateReviewDto) {
    try {
      return await this.prisma.reviews.create({ data: createReviewDto })
    } catch (error: any) {
      console.log(error, "err")
      return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'GATEWAY_TIMEOUT')
    }
  }

  async findAll() {
    try {
      return await this.prisma.reviews.findMany()

    } catch (error: any) {
      console.log(error, "err")
      return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'GATEWAY_TIMEOUT')
    }
  }

  async findOne(id: number) {
    try {
      await this.prisma.reviews.findUnique({ where: { id } })

    } catch (error: any) {
      console.log(error, "err")
      return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'GATEWAY_TIMEOUT')
    }
  }

  async update(updateReviewDto: UpdateReviewDto) {
    try {
      const {id, ...withoutid} = updateReviewDto
      await this.prisma.reviews.update({ where: { id }, data: withoutid })
    } catch (error: any) {
      console.log(error, "err")
      return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'GATEWAY_TIMEOUT')
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.reviews.delete({ where: { id } })
    } catch (error: any) {
      console.log(error, "err")
      return CustomErrorHandler(`${error.message || JSON.stringify(error)}`, 'GATEWAY_TIMEOUT')
    }
  }
}
