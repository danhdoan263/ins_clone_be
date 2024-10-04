
import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'
let insDatabaseInstance = null

const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})
export const CONNECT_DB = async () => {
    //connect MongoDB atlas using uri
    await mongoClientInstance.connect()
    //connect susscessful will modified insDatabaseInstance wll be absolute connected
    insDatabaseInstance = mongoClientInstance.db(env.MONGODB_NAME)
}
export const CLOSE_DB = async () => {
    await mongoClientInstance.close()
}

//only call GET_DB after connected DB
export const GET_DB = () => {
    if (!insDatabaseInstance) throw new Error('Must connect database first')
    return insDatabaseInstance
}