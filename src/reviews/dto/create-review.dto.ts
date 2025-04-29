import { IsDate, IsOptional, IsString } from "class-validator"

export class CreateReviewDto {

    @IsString()
    customer_name:string

    @IsString()
    star_rating:string
    @IsDate()
    createdAt          :Date
    @IsString()
    reveiw_description :string
    @IsOptional()
    @IsString()
    last_editedBy?:string

    
    @IsOptional()
    posterImage?: any
}
