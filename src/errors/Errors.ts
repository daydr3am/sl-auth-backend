export class ErrorBase<T extends string> extends Error {
    public readonly context?: object
    public readonly cause?: Error
    name: T

    constructor(message: string, name: T, options: {cause?: Error, context?: object}) {
        super(message)
        const { cause, context } = options
        this.cause = cause
        this.name = name
        this.context = context
    }
}