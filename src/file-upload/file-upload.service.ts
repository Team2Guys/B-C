import { Injectable } from '@nestjs/common';

import { cloudinary } from './cloudinary.config';
import { CustomErrorHandler } from '../utils/helperFunctions';


@Injectable()
export class FileUploadService {


async getFile(file: Express.Multer.File): Promise<any> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
        if (error) {
          CustomErrorHandler(error.message, 'INTERNAL_SERVER_ERROR')
          return reject(error);

        }
          
        console.log(result, "result")
        resolve({imageUrl: result.url,public_id:result.public_id });
      });

      uploadStream.end(file.buffer);
    });
  }

  async DeleteImage (image_public_id: string){
    return  await cloudinary.uploader.destroy(image_public_id);
  }

}