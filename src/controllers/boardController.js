
import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";
const createNew = async (req, res, next) => {
    try {
        console.log('request body', req.body)

        // res.status(StatusCodes.CREATED).json({
        //     message: 'POST from controller: API create new boards',
        //     code: StatusCodes.CREATED
        // })
        throw new ApiError(StatusCodes.BAD_GATEWAY, 'danhdoan test error')
    } catch (error) { next(error) }
}


export const boardController = {
    createNew
}