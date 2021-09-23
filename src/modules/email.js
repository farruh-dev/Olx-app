const nodemailer = require('nodemailer');

async function mail(to, subject, mail_body, mail_html) {
    const transport = await nodemailer.createTransport({
        host: "smtp.yandex.ru",
        port: 465,
        secure: true,
        auth: {
            user: "olx-testtest@yandex.com",
            pass: "testTest0000"
        }
    })

    return await transport.sendMail({
        from: "'OLX group'  <olx-testtest@yandex.com>",
        to,
        subject,
        text: mail_body,
        html: mail_html,
    })
}

module.exports = mail