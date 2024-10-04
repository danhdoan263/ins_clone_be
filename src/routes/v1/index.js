import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoute } from '~/routes/v1/boardRoute'

const Router = express.Router()
// check API status v1
Router.get('/status', (req, res) => {
    res.status(StatusCodes.OK).json({
        message: 'API ready to use',
        code: StatusCodes.OK
    })
})
// boardRoute API route
Router.use('/boards', boardRoute)
export const APIs_V1 = Router