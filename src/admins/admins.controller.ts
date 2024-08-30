import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { Prisma } from '@prisma/client';
import { loginAdminDto, Super_admin_dto } from './dto/create-admin.dto';
import { Response ,Request} from 'express';


@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post("add-admin")
  create(@Body() createAdminDto:  Prisma.AdminsCreateInput) {
    return this.adminsService.create(createAdminDto);
  }

  

  @Get("get_all_admin")
  findAll() {
    return this.adminsService.findAll();
  }

  @Get('get_admin:id')
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: Prisma.AdminsUpdateInput) {
    return this.adminsService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(+id);
  }

  @Post("admin-login")
    admin_login( @Body() loginData: loginAdminDto,@Res({ passthrough: true }) res: Response,){
      console.log(loginData)
      return this.adminsService.adminlogin(loginData,res);

    }

    @Post('get-admin-handler')
    get_admin_handler(@Req() req:Request){
    console.log(req, "headers")
      return this.adminsService.getAdminHandler(req)
    }

    // super=admin

    @Post("super_admin_login-login")
    super_admin_login( @Body() loginData: Super_admin_dto,@Res({ passthrough: true }) res: Response,){
      console.log(loginData)
      return this.adminsService.super_login_admin_handler(loginData,res);

    }


    @Post('getSuperAdminHandler')
    getSuperAdminHandler(@Req() req:Request){
      return this.adminsService.getSuperAdminHandler(req)
    }


    @Get("get_all_records")
    getRecords(){
    console.log("function is runnning")
      return this.adminsService.getRecords()
    }
  

}
