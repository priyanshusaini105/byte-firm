// send mail using smtp and nodemailer
'use server'
import { ContactFormValues } from '@/types';
import * as nodemailer from 'nodemailer';



export default async function sendMail(contactFormValues:ContactFormValues){
    console.log(process.env.EMAIL,process.env.EMAIL_PASSWORD)
    const {name, email, subject, message} = contactFormValues;
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use TLS
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `${name} <${email}>`, // sender address
        to: `${process.env.EMAIL}, priyanshusaininew@gmail.com`, // list of receivers
        subject: subject, // Subject line   
        text: message, // plain text body
        html: `<b>${message}</b>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));


}