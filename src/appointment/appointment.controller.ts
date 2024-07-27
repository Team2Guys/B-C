import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Prisma } from '@prisma/client';

@Controller('appointment')
export class AppointmentController {
    constructor(private readonly AppointmentService: AppointmentService) { }

    @Post("AddAppointment")
    Appointmentshandler(@Body() user_data: Prisma.AppointmentsCreateInput) {
        return this.AppointmentService.AddOpointmentHandler(user_data)
    }


    @Get("getAllappointments")
    GetAllappointments() {
        return this.AppointmentService.getAllPointments()
    }

}
