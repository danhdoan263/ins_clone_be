
import { StatusCodes } from "http-status-codes";
const createNew = async (req, res, next) => {
    try {
        console.log('request body', req.body)

        res.status(StatusCodes.CREATED).json({
            message: 'POST from controller: API create new boards',
            code: StatusCodes.CREATED
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
            {
                errors: error.message
            }
        )
    }
}


export const boardController = {
    createNew
}