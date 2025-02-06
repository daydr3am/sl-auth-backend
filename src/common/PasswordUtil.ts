import * as bcrypt from "bcrypt"

const saltRounds = 10;

export async function hashPassword(password: string, salt: string) {
    return await bcrypt.hash(password, salt)
}

export async function hashNewPassword(password: string) {
    let salt = await bcrypt.genSalt(saltRounds)
    let hashedPassword = await bcrypt.hash(password, salt);

    return { hashedPassword, salt }
}