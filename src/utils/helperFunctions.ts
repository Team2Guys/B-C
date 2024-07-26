import {HttpException, HttpStatus  } from '@nestjs/common';


export const  CustomErrorHandler =(Errormsg:string, ErrorStatus: string)=>{
 throw new HttpException(Errormsg, HttpStatus[ErrorStatus]);
}

