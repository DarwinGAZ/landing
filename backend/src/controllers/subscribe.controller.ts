import { RequestHandler } from "express";
import { prisma } from "../libs/prisma";
import { automaticEmail } from "./email.controller";

export const subscribeController: RequestHandler = async (req, res) => {
    const { name, email } = req.body;

    try {
        const newUser = await prisma.user.create({
            data: { name, email },
        });

        await automaticEmail(newUser.name, newUser.email);

        return res.status(201).json({ success: true, newUser });
    } catch (err) {
        res.status(409).json({
            error: "Dados invalidos e/ou já existem",
        });
    }
};
