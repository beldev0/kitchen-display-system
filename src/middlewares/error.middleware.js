const errorMiddleware = (err, req, res, next) => {
    if (err) {        
        if(err.code) {
            res.status(err.statusCode).json({"error" :err.error})
        } else {
            res.status(400).json({"error": err.message})
        }
    }
}

module.exports = errorMiddleware