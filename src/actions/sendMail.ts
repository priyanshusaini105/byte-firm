// send mail using smtp and nodemailer
"use server";
import { ContactFormValues } from "@/types";
import * as nodemailer from "nodemailer";

const signatures=  `
<table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: &quot;Lucida Sans Unicode&quot;;"><tbody><tr><td><table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: &quot;Lucida Sans Unicode&quot;;"><tbody><tr><td width="150" style="vertical-align: middle;"><span class="template3__ImageContainer-sc-vj949k-0 jeScQV" style="margin-right: 20px; display: block;"><img src="https://i.ibb.co/7JJdhjv/logo-removebg-preview.png" role="presentation" width="130" class="image__StyledImage-sc-hupvqm-0 gYgOut" style="max-width: 130px;"></span></td><td style="vertical-align: middle;"><h2 color="#000000" class="name__NameContainer-sc-1m457h3-0 jxbGUj" style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0); font-weight: 600;"><span>Byte</span><span>&nbsp;</span><span>Firm</span></h2><p color="#000000" font-size="medium" class="company-details__CompanyContainer-sc-j5pyy8-0 VnOLK" style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>Team</span><span>&nbsp;|&nbsp;</span><span>Byte Firm</span></p></td><td width="30"><div style="width: 30px;"></div></td><td color="#55c3f2" direction="vertical" width="1" height="auto" class="color-divider__Divider-sc-1h38qjv-0 llIisW" style="width: 1px; border-bottom: none; border-left: 1px solid rgb(85, 195, 242);"></td><td width="30"><div style="width: 30px;"></div></td><td style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: &quot;Lucida Sans Unicode&quot;;"><tbody><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: &quot;Lucida Sans Unicode&quot;;"><tbody><tr><td style="vertical-align: bottom;"><span color="#55c3f2" width="11" class="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe" style="display: inline-block; background-color: rgb(85, 195, 242);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#55c3f2" alt="emailAddress" width="13" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri" style="display: block; background-color: rgb(85, 195, 242);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a href="mailto:bytefirmwork@gmail.com" color="#000000" class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>bytefirmwork@gmail.com</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: &quot;Lucida Sans Unicode&quot;;"><tbody><tr><td style="vertical-align: bottom;"><span color="#55c3f2" width="11" class="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe" style="display: inline-block; background-color: rgb(85, 195, 242);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#55c3f2" alt="website" width="13" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri" style="display: block; background-color: rgb(85, 195, 242);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a href="//bytefirm.in" color="#000000" class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>bytefirm.in</span></a></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td><table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="width: 100%; vertical-align: -webkit-baseline-middle; font-size: medium; font-family: &quot;Lucida Sans Unicode&quot;;"><tbody><tr><td height="30"></td></tr><tr><td color="#55c3f2" direction="horizontal" width="auto" height="1" class="color-divider__Divider-sc-1h38qjv-0 llIisW" style="width: 100%; border-bottom: 1px solid rgb(85, 195, 242); border-left: none; display: block;"></td></tr><tr><td height="30"></td></tr></tbody></table></td></tr><tr><td><table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI" style="width: 100%; vertical-align: -webkit-baseline-middle; font-size: medium; font-family: &quot;Lucida Sans Unicode&quot;;"><tbody><tr><td style="vertical-align: top;"><img src="https://i.ibb.co/brJH0X7/logo.png" role="presentation" width="130" class="image__StyledImage-sc-hupvqm-0 gYgOut" style="display: inline-block; max-width: 130px;"></td></tr></tbody></table></td></tr></tbody></table>
`

const createEmailToYourAddress = (formData: ContactFormValues) => {
  return `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #333333;
            }
            p {
              color: #666666;
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </div>
          <br/>
            ${signatures}
        </body>
      </html>
    `;
};

const createReplyEmailToClient = (formData: ContactFormValues) => {
  return `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #333333;
            }
            p {
              color: #666666;
              margin-bottom: 10px;
            }
            .signature {
              font-style: italic;
              color: #999999;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Thank you for reaching out!</h2>
            <p>Hi ${formData.name},</p>
            <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
            <p>Here are the details you provided:</p>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
            <p class="signature">Best regards,<br />Byte Firm</p>
            <br/>
            ${signatures}
          </div>
        </body>
      </html>
    `;
};

export default async function sendMail(contactFormValues: ContactFormValues) {
    try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true, // use TLS
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
          },
        });
    
        // Send email to your address
        await transporter.sendMail({
          from: `${contactFormValues.name} <${contactFormValues.email}>`,
          to: `${process.env.EMAIL}, priyanshusaininew@gmail.com`,
          subject: contactFormValues.subject,
          text: contactFormValues.message,
          html: createEmailToYourAddress(contactFormValues),
        });
    
        // Send reply email to the client
        await transporter.sendMail({
          from: "Your Name <your@email.com>",
          to: `${contactFormValues.email}`,
          subject: "Re: " + contactFormValues.subject,
          text: "Thank you for reaching out!",
          html: createReplyEmailToClient(contactFormValues),
        });
        
        console.log("Emails sent successfully!");
      } catch (error) {
        console.error("Error sending emails:", error);
      }
}
