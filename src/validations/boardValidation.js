import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
    const correctCondition = Joi.object({
        title: Joi.string().required().min(3).max(50).trim().strict(),
        description: Joi.string().required().min(3).max(255).trim().strict()
    })

    try {
        //abortEarly return all error from validateAsync
        await correctCondition.validateAsync(req.body, { abortEarly: false })
        //validate successfull to continue to controller
        next()

    } catch (error) {
        console.log(error);

        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: new Error(error).message
        })
    }
}


export const boardValidation = {
    createNew
}