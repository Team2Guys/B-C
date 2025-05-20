import { PartialType } from '@nestjs/swagger';
import { CreateReviewDto } from './create-review.dto';
import { IsNumber } from 'class-validator';

export class UpdateReviewDto extends PartialType(CreateReviewDto) {
        @IsNumber()
        id: number
}
