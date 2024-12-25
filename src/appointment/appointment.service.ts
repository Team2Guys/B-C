import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CustomErrorHandler } from '../utils/helperFunctions';
import * as nodemailer from 'nodemailer';
@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}
  private transporter = nodemailer.createTransport({
    host: 'mail.blindsandcurtains.ae',
    port: 587,
    secure: false,
    auth: {
      user: process.env.ADMIN_MAIL,
      pass: process.env.ADMIN_PASSWORD,
    },
  });
  gethello() {
    return 'hellow from appointments';
  }

  async AddOpointmentHandler(user_data: Prisma.AppointmentsCreateInput) {
    try {
      const newAppointment = await this.prisma.appointments.create({
        data: user_data,
      });

      await this.sendConfirmationEmail(user_data, null, newAppointment);
      await this.sendConfirmationEmail(
        user_data,
        user_data.email,
        newAppointment,
      );

      return { message: 'Appointment created successfully🎉', newAppointment };
    } catch (error) {
      return CustomErrorHandler(`${error.message}`, 'INTERNAL_SERVER_ERROR');
    }
  }

  getAllPointments() {
    try {
      return this.prisma.appointments.findMany();
    } catch (error) {
      return CustomErrorHandler(`${error.message}`, 'INTERNAL_SERVER_ERROR');
    }
  }

  private async sendConfirmationEmail(
    user_data: any,
    user_mail: string | null,
    appointment: Prisma.AppointmentsCreateInput,
  ) {
    try {
      const recipients = user_mail
        ? `${user_mail}`
        : `${process.env.RECEIVER_MAIL1}, ${process.env.RECEIVER_MAIL2}`;
      const mailOptions = {
        from: process.env.MAILER_MAIL,
        to: recipients,
        subject: 'Appointment Confirmation',
        html: `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blinds And Curatins</title>
    <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 20px;
      font-size: 12px;
    }
    .contact-info {
      margin-bottom: 18px;
    }
    .contact-info p {
      margin: 5px 0;
    }
  </style>
</head>
<body>
    <p>Thank you for sending us your appointment enquiry. We will get back to you within a few hours to confirm your time slot.</br>
    Once it’s locked in, you can expect our professional team to arrive as close to the allotted time as possible. They'll bring as many samples as they can carry, allowing you a huge selection to choose from. You can browse comfortably at your leisure whilst they measure up.</br>
    Once fabric is selected they will provide you a quotation on the spot and if you wish to proceed, we can expect the deposit by cash, credit card or bank transfer (we can send an online link as well if required).</br>
    If you decide that you need more time to think about it, no problem at all, we dont do the pushy sales techniques and we will forward the quotation to you by the next working day at the latest.</p> 
    <p>Some benefits of ordering with <a href="http://www.blindsandcurtains.ae" target="_blank">http://www.blindsandcurtains.ae</a></p>
    <div>
        <ol>
            <li>One of the original home visit services in Dubai. Years of experience and corrections to perfect our appointment and installation process.</li>
            <li>Experienced sales teams and installers who will take great care in your home and clean up behind themselves, every single time.</li>
            <li>A comprehensive <strong>3-year warranty</strong> on all fabrics, and up to <strong>10 years on motors.</strong></li>
            <li>Free moving service valid for up to <strong>2 years</strong> when moving to the same Emirate. We will uninstall and re-install anything bought from us at no cost (unless alterations are needed).</li>
            <li><strong>750+ 5* reviews</strong> make us one of Dubai’s most loved blinds & curtains companies.</li>
            <li>We also offer <strong>furniture, wallpapers,</strong> and <strong>vinyl wrapping</strong> services. All offered with discount vouchers when bought in conjunction with blinds or curtains.</li>
          </ol>
    </div>
    <p>we are nothing without our customers and really appreciate the oppurtunity to show you what can do. In the event that you have any cause for concern, please do not hesitate to contact us on:</p>
     <div class="contact-info">
      <p><strong>WhatsApp:</strong><a href="https://wa.me/0544945332" target="_blank"> 054 494 5339</a></p>
<p><strong>Phone:</strong><a href="tel:042522025" target="_blank"> 04 252 2025</a></p>
      <p><strong>Email:</strong> <a href="mailto:connect@twoguys.ae">connect@twoguys.ae</a></p>
      <p><strong>Instagram:</strong> <a href="https://www.instagram.com/blindsandcurtainsdubai" target="_blank">https://www.instagram.com/blindsandcurtainsdubai</a></p>
    </div>
    <div>
      <ol>
        <li><b>Name </b></br>${user_data.name}</li>
        <li><b>Phone Number</b></br> ${user_data.phone_number}</li>
        <li><b>WhatsApp No. (If Different)</b></br>${user_data.whatsapp_number}</li>
        <li><b>Email</b> <a href="mailto:${user_data.email}" target="_blank">${user_data.email}</a></li>
        <li><b>Tell us when you are available</b></br> ${new Date(user_data.prefered_Date).toLocaleDateString()} </li>
        <li><b>Time</b></br>  ${user_data.prefered_time} </li>
        <li><b>How many windows</b></br>  ${user_data.windows} </li>
        <li><b>How did you hear about us?</b></br>  ${user_data.how_user_find_us} </li>
        <li><b>Tell us where you are located</b></br>  ${user_data.area} </li>
        <li><b>Window Dressing Type</b></br>  ${user_data.product_type} </li>
        <li><b>Any Other Requirements</b>  ${user_data.user_query} </li>
      </ol>
    </div>
</body>
</html>
`,
      };

      await this.transporter.sendMail(mailOptions);
      console.log('Confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
