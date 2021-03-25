import express from "express"
import clientRouter from "./clientRouter.js"
import typeRouter from "./api/v1/typeRouter.js"
import petRouter from "./api/v1/petRouter.js"
import surrenderRouter from "./api/v1/surrenderRouter.js"

const rootRouter = new express.Router()

rootRouter.use("api/v1/types", typeRouter)
rootRouter.use("api/v1/pets", petRouter)
rootRouter.use("api/v1/surrender", surrenderRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
