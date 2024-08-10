import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CustomErrorHandler } from '../utils/helperFunctions';

@Injectable()
export class AppointmentService {
    constructor(private prisma: PrismaService) { }


gethello(){
    return 'hellow from appointments'
}

AddOpointmentHandler (user_data:Prisma.AppointmentsCreateInput){
return this.prisma.appointments.create({
    data:user_data
})

}

getAllPointments (){
    try {
        return this.prisma.appointments.findMany();
        
    } catch (error) {
        return CustomErrorHandler(`${error.message}`, 'INTERNAL_SERVER_ERROR')
    }
 }






}
