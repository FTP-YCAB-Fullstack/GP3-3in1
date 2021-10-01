"use strict"

const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        message: err.message || 'internal server error'
    })
}

module.exports = errorHandler