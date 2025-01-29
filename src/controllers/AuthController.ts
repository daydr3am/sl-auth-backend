import { Request, Response } from "express";
import { AuthRequestBody } from "../dtos/AuthRequest";

type AuthRequest = Request & {body: AuthRequestBody}

export function authenticateUser(req: AuthRequest, res: Response) {
    console.log("Hello from auth method!")
    res.status(200).send();
}