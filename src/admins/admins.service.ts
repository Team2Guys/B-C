import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomErrorHandler } from '../utils/helperFunctions';
import * as bcrypt from 'bcrypt';
import { loginAdminDto, Super_admin_dto } from './dto/create-admin.dto';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { Response, Request } from 'express';








@Injectable()
export class AdminsService {
  constructor(private prisma: PrismaService) { }
  private jwtService: JwtService

  async create(createAdminDto: Prisma.AdminsCreateInput) {
    console.log(createAdminDto, "admin dto")
    const { email, fullname, } = createAdminDto
    const { password, ...withoutpassword } = createAdminDto

    if (!email || !fullname || !password) return CustomErrorHandler("Fields are required", "FORBIDDEN")
    let saltOrRounds = 10
    const hash = await bcrypt.hash(password, saltOrRounds);
    console.log('Password:', hash);
    console.log('Salt Rounds:', saltOrRounds, "password");

    try {
      let existingAdmin = await this.prisma.admins.findUnique({ where: { email: email } })
      if (existingAdmin) return CustomErrorHandler("User is already Exist", "FORBIDDEN")

      let response = this.prisma.admins.create({
        data: { password: hash, ...withoutpassword }
      })
      return response
    } catch (error) {
      return CustomErrorHandler(error.message || JSON.stringify(error), "INTERNAL_SERVER_ERROR")
    }


  }

  async findAll() {
    try {
      let admins = await this.prisma.admins.findMany()
      return admins;
    } catch (error) {
      return CustomErrorHandler(error.message || JSON.stringify(error), "INTERNAL_SERVER_ERROR")

    }
  }

  async findOne(id: number) {
    try {
      let admin = await this.prisma.admins.findUnique({ where: { id: id } })
      return admin
    } catch (error) {
      return CustomErrorHandler(error.message || JSON.stringify(error), "INTERNAL_SERVER_ERROR")

    }
  }

  async update(id: number, updateAdminDto: Prisma.AdminsUpdateInput) {
    try {
      let existingAdmin = await this.prisma.admins.findUnique({ where: { id: id } })
      if (!existingAdmin) return CustomErrorHandler("No admin found", "INTERNAL_SERVER_ERROR")

      let updated_admin = await this.prisma.admins.update({ where: { id: id }, data: updateAdminDto })
      return updated_admin

    } catch (error) {
      return CustomErrorHandler(error.message || JSON.stringify(error), "INTERNAL_SERVER_ERROR")

    }

  }

  async remove(id: number) {
    try {
      let admin = await this.prisma.admins.findUnique({ where: { id: id } })
      if (!admin) return CustomErrorHandler("No admin found", "NOT_FOUND")
      let deleted = await this.prisma.admins.delete({ where: { id: id } })
      return deleted
    } catch (error) {
      return CustomErrorHandler(error.message || JSON.stringify(error), "INTERNAL_SERVER_ERROR")

    }
  }

  async adminlogin(login_credentials: loginAdminDto, res: Response) {
    try {
      const { email, password } = login_credentials
      if (!email || !password) return CustomErrorHandler("All fields are required", "FORBIDDEN")

      let admin_user = await this.prisma.admins.findUnique({ where: { email: email } })
      if (!admin_user) return CustomErrorHandler("User not found", 'NOT-FOUND')

      const payload = {
        email: admin_user.email,
        role: admin_user.role,
        id: admin_user.id
      };

      let passowrd_check = await bcrypt.compare(password, admin_user.password)
      console.log(passowrd_check, "passowrd-check")
      if (!passowrd_check) return CustomErrorHandler("Passowrd is incorrect", "FORBIDDEN")
      let access_token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' })

      const { password: Newpassword, ...wthoutPassowrd } = admin_user

      res.cookie('2guysAdminToken', access_token, {
        // httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      });
      console.log(access_token, "acces-token")

      return {
        message: 'Login successfull 🎉',
        user: wthoutPassowrd,
        token: access_token
      };





    } catch (error) {
      return CustomErrorHandler(error.message || JSON.stringify(error), "INTERNAL_SERVER_ERROR")

    }


  }

  async getAdminHandler(req: Request | any) {
    try {
      const { email } = req.user
      if(!email) return CustomErrorHandler("Email is required", "NOT_FOUND")
      let admin_user = await this.prisma.admins.findUnique({ where: { email: email } })
      if (!admin_user) CustomErrorHandler("User not found", "FORBIDDEN")
      const { password, ...withoupassword } = admin_user
      return withoupassword


    } catch (error) {
      return CustomErrorHandler(error.message || JSON.stringify(error), "INTERNAL_SERVER_ERROR")

    }
  }



  // super_admin

  async super_login_admin_handler(super_admin_login: Super_admin_dto, res: Response) {
    try {
      const { email, password } = super_admin_login
      if ((email !== process.env.super_admin_email) || password !== process.env.super_admin_passoword) {
        return new UnauthorizedException("Invalid Credentials")
      }

      let super_admin_credentials = {
        fullname: process.env.super_admin_name,
        email: process.env.super_admin_email,
        role: 'super admin'
      }

      let access_token = jwt.sign(super_admin_credentials, process.env.JWT_SECRET, { expiresIn: '24h' })


      res.cookie('superAdminToken', access_token, {
        // httpOnly: true,
        // secure: process.env.NODE_ENV === 'production',
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      });
      return { super_admin_credentials, token: access_token }

    } catch (error) {
      return CustomErrorHandler(error.message || JSON.stringify(error), "INTERNAL_SERVER_ERROR")

    }
  }

  async getSuperAdminHandler(req: Request | any) {
    try {
      let super_admin_credentials = {
        fullname: process.env.super_admin_name,
        email: process.env.super_admin_email,
        role: 'super admin'
      }

      const { email } = req.user
      let admin_user = super_admin_credentials.email === email
      console.log(admin_user, "admin", email)
      if (!admin_user) return CustomErrorHandler("User not found", "FORBIDDEN")
      return super_admin_credentials

    } catch (error) {
      return CustomErrorHandler(error.message || JSON.stringify(error), "INTERNAL_SERVER_ERROR")

    }
  }


  // Get record sales
  async getRecords() {
    try {
      let total_products = await this.prisma.products.count({})
      let total_categories = await this.prisma.categories.count({})
      let total_subCategories = await this.prisma.subCategories.count({})
      let total_admins = await this.prisma.admins.count({})
      let total_appointments = await this.prisma.appointments.count({})

      return {
        total_admins,
        total_appointments,
        total_categories,
        total_products,
        total_subCategories
      }

    } catch (error) {
      return CustomErrorHandler(error.message || JSON.stringify(error), "INTERNAL_SERVER_ERROR")

    }

  }








}
