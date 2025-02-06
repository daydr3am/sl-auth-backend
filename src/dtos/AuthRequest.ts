export type AuthRequestBody = {
    username: string
    password: String
}

export type SignUpRequestBody = {
    username: string
    password: string
    first_name: string
    last_name: string
    e_mail: string | null;
}