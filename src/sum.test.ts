import { app } from ".";
import request from "supertest";
import {describe, it, expect} from 'vitest';

describe("Post/sum", ()=> {
    it("should return the sum of two numbers", async()=> {
        const res = await request(app).post("/sum").send({
            a:1,
            b:2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    });
    it("should return the sum of two -ve numbers", async()=> {
        const res = await request(app).post("/sum").send({
            a:-1,
            b:-2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
    });
    it("should return the sum of two zero numbers", async()=> {
        const res = await request(app).post("/sum").send({
            a:0,
            b:0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
    })
})