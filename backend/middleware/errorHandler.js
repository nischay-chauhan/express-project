const {
    constants
} = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "validation failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack
            });

        case constants.FORBIDDEN:
            res.json({
                title: "forbidden error",
                message: err.message,
                stackTrace: err.stack
            });
            break;

        case constants.UNAUTHORIZED:
            res.json({
                title: "Autharization error ",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.SERVER_ERROR:
                res.json({
                    title: "SERVER error ",
                    message: err.message,
                    stackTrace: err.stack
                });
                break;
        default:
            console.log("No error found")
            break;
    }



};
module.exports = errorHandler;