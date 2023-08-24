'use server'
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
// const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, EMAIL } = require('../config');

const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET='YOUR';
const REFRESH_TOKEN='YOUR';
const EMAIL='YOUR';

const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
            type: "OAuth2",
            user: EMAIL,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken
    }
});

export const handleEmail = (formData:FormData) => {
    const mailOptions = {
        from: formData.get('email'),
        to: EMAIL,
        subject: formData.get('email'),
        text: formData.get('message')
    };
    smtpTransport.sendMail(mailOptions, (error: any, response: any) => {
        error ? console.log(error) : console.log(response);
        smtpTransport.close();
    });
}
