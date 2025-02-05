import * as bcrypt from "bcrypt"

export async function hashPassword(password: string, salt: string) {
    return await bcrypt.hash(password, salt)
}