import { User } from "../models/User"
import { hashNewPassword, hashPassword } from "../common/PasswordUtil";
import { ErrorBase } from "../errors/Errors";
import { SignUpRequestBody } from "../dtos/AuthRequest";
import { stringify } from "querystring";

type UserErrorNames = 'UserNotFound' | 'FailedToCreateUser'
class UserError extends ErrorBase<UserErrorNames> {}

export async function login(username: string, password: string): Promise<User> {
    const users = await User.findAll({
        where: {
            username: username
        }
    }).catch((reason) => {
        console.log("Not able to find user with username: %s. Reason: %s", username, reason); 
        return [];
    })

    if (users.length == 0) {
        return Promise.reject(new UserError("The user was not found", "UserNotFound", { context: { username: username }}));
    }

    const user = users[0]
    const hashed_password = await hashPassword(password, user.salt)

    if (hashed_password != user.hashed_password) {
        return Promise.reject(new UserError("The user was not found", "UserNotFound", { context: { username: username }}));
    } else {
        return Promise.resolve(user);
    }
}

export async function signUp(request: SignUpRequestBody) {
    let { hashedPassword, salt } = await hashNewPassword(request.password)

    let userDetails = {
        username: request.username,
        e_mail: request.e_mail,
        first_name: request.first_name,
        last_name: request.last_name
    }

    try {
        let storedUser = await User.create({...userDetails, hashed_password: hashedPassword, salt: salt})
        return Promise.resolve(storedUser)
    } catch (error) {
        if (error instanceof Error)
            return Promise.reject(new UserError("Was not able to store user", "FailedToCreateUser", { cause: error }))
        else 
        return Promise.reject(new UserError("Was not able to store user", "FailedToCreateUser", {}))
    }
}