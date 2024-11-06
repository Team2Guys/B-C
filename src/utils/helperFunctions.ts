import {HttpException, HttpStatus  } from '@nestjs/common';


export const  CustomErrorHandler =(Errormsg:string, ErrorStatus: string)=>{
    throw new HttpException(Errormsg, HttpStatus[ErrorStatus]);
}




export function getStatusNameByCode(code: number): string | undefined {
    const entry = Object.entries(HttpStatus).find(([_, value]) => value === code);
    console.log(entry)
    return entry ? entry[0] : undefined;
  }