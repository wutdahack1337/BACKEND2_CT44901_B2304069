export class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.name = "ApiError";
    }
}

export const notFound = (request, response, next) => {
    next(new ApiError(404, "Resource not found"));
}

export const errorHandler = (error, request, response, next) => {
    const statusCode = error.statusCode ?? 500;
    const message = error.message ?? "Internal Server Error";

    if (statusCode >= 500) {
        console.error(error);
    }

    response.status(statusCode).json({error: {message}});
}