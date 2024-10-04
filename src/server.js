/* eslint-disable no-console */

import express from 'express'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1/index'
import { errorHandlingMiddleware } from '~/middlewares/errorHandlingMiddleware'
const START_SERVER = () => {
  const app = express()

  // enable server read json data
  app.use(express.json())
  //using v1 route to api v1 from index 
  app.use('/v1', APIs_V1)
  //Middleware processing erro include
  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello ${env.AUTHOR}, I am running at ${env.APP_HOST}:${env.APP_PORT}/`)
  })

  //stop DB when control c 
  // exitHook(() => {
  //   console.log('disconnect mongoDB')
  //   CLOSE_DB()
  // })
}

// start server after connected db
//IIFE anonymus function

(async () => {
  try {
    console.log('connecting to mongoDB cloud atlas ')
    await CONNECT_DB()
    console.log('connected to mongoDB cloud atlas success')
    START_SERVER()
  } catch (error) {
    console.error(error)
    process.exit(0)
  }
})()
