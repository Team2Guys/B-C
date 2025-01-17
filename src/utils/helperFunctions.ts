import {HttpException, HttpStatus  } from '@nestjs/common';


export const  CustomErrorHandler =(Errormsg:string, ErrorStatus: string)=>{
    throw new HttpException(Errormsg, HttpStatus[ErrorStatus]);
}




export function getStatusNameByCode(code: number): string | undefined {
    const entry = Object.entries(HttpStatus).find(([_, value]) => value === code);
    console.log(entry)
    return entry ? entry[0] : undefined;
  }

  export function capitalizeWords(input: any): any {
    if (Array.isArray(input)) {
        // Handle array input: capitalize each word and return the updated array
        return input.map(word => word.trim().charAt(0).toUpperCase() + word.trim().slice(1));
    } else if (typeof input === 'string') {
        // Handle string input: split by commas, capitalize, and return as an array
        return input
            .split(',')
            .map(word => word.trim().charAt(0).toUpperCase() + word.trim().slice(1));
    } else {
        // Handle unexpected types gracefully
        return input;
    }
}

