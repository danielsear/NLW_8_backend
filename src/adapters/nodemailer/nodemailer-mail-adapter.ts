import { MailAdapter, SendMailData } from '../mail-adpter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '83679095b0485c',
    pass: '72091e798942aa'
  }
})

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi.feedget.com>',
      to: 'Daniel Seara <daniel@interprise.com',
      subject,
      html: body
    })
  }
}
