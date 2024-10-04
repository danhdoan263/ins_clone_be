/* eslint-disable no-console */

import express from 'express'
import { CONNECT_DB, CLOSE_DB } from '~/config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from '~/config/environment'
import { APIs_V1 } from '~/routes/v1/index'
const START_SERVER = () => {
  const app = express()

  app.use(express.json())
  app.use('/v1', APIs_V1)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello ${env.AUTHOR}, I am running at ${env.APP_HOST}:${env.APP_PORT}/`)
  })
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
