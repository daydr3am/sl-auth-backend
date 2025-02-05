import { User } from "../models/User"
import { hashPassword } from "../common/PasswordUtil";

async function login(username: string, password: string) {
    const users = await User.findAll({
        where: {
            username: username
        }
    }).catch((reason) => {console.log("Not able to find user with username: %s. Reason: %s", username, reason); return []})

    if (users === null) {
        return null;
    }

    const user = users[0]
    const hashed_password = await hashPassword(password, user.salt)

    if (hashed_password != user.hashed_password) {
        console.log("Wrong password!")
        return null;
    } else {
        return user;
    }
}