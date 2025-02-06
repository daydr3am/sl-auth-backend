import { Request, Response } from "express";
import { AuthRequestBody, SignUpRequestBody } from "../dtos/AuthRequest";
import { User } from "../models/User";
import { signUp } from "../services/UserService";

type AuthRequest = Request & {body: AuthRequestBody}
type SignUpRequest = Request & { body: SignUpRequestBody }

export function authenticateUser(req: AuthRequest, res: Response) {
    
}

export function createUser(req: SignUpRequest, res: Response) {
    let request = req.body
    signUp(request)
}