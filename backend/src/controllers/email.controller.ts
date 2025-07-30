import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { prisma } from "../libs/prisma";

export const emailController: RequestHandler = async (req, res) => {
    const user = await prisma.user.findMany({});

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GOOGLE_APP_PASSWORD,
        },
    });

    try {
        for (const u of user) {
            let message = {
                from: `Darwin Gabriel <${process.env.GMAIL}>`,
                to: u.email,
                subject: "Seja bem vindo!",
                html: `<!DOCTYPE html>
    <html>
      <head><meta charset="utf-8"></head>
      <body>
        <p>Olá! ${
            u.name.split(" ")[0]
        } Seja bem vindo às notícias da semana.</p>
        <p><img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16" alt="Ícone"/></p>
        <p><img src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350" alt="GIF"/></p>
      </body>
    </html>`,
            };
            await transporter.sendMail(message);
        }
    } catch (err) {
        return res.json({ error: "erro ao enviar emails" });
    }

    res.json({ success: true, message: "E-mails enviados com sucesso!" });
};

export const automaticEmail = async (name: string, email: string) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GOOGLE_APP_PASSWORD,
        },
    });

    try {
        let message = {
            from: `Darwin Gabriel <${process.env.GMAIL}>`,
            to: email,
            subject: "Seja bem-vindo!",
            html: `<!DOCTYPE html>
<html>
  <head><meta charset="utf-8"></head>
  <body>
    <p>Olá, ${name.split(" ")[0]}! Seja bem-vindo às notícias da semana.</p>
    <p><img src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350" alt="GIF"/></p>
  </body>
</html>`,
        };

        await transporter.sendMail(message);
    } catch (err) {
        console.error("Erro ao enviar e-mail automático:", err);
        return false;
    }
};
