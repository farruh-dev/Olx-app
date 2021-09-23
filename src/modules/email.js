const nodemailer = require('nodemailer');

async function mail(to, subject, mail_body, mail_html) {
    try {
        const transport = await nodemailer.createTransport({
            host: "smtp.yandex.ru",
            port: 465,
            secure: true,
            auth: {
                user: "olx-testtest@yandex.com",
                pass: "p@ssword1",
            }
        })
    
        return await transport.sendMail({
            from: "'OLX group'  <olx-testtest@yandex.com>",
            to,
            subject,
            text: mail_body,
            html: mail_html,
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = mail