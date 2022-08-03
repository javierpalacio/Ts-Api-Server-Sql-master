import { Request, Response } from "express";
import { connect } from "../database";

export function indexWelcome(req:Request,res:Response):Response{
    return res.json('Bienvenido a mi API');
}

