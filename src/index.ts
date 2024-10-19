import express from "express";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());

app.post("/sum", async(req,res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a+b;

    await prismaClient.sum.create({
        data: {
            a:a,
            b:b,
            result: answer
        }
    })

    res.json({
        answer
    })
});
