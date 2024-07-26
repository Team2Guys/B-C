import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { cloudinary } from './cloudinary.config';


@Injectable()
export class FileUploadService {

// async getFile (file: any){
//     console.log(file, "file")

//     const result = await cloudinary.uploader.upload(file, {folder: "2guysProducts" 
//     });
//     console.log(result, "result")
// return result;

// }



async getFile(file: Express.Multer.File): Promise<any> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
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
