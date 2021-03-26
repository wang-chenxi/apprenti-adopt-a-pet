import express from "express"
import clientRouter from "./clientRouter.js"
import typeRouter from "./api/v1/typeRouter.js"
import petRouter from "./api/v1/petRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/types", typeRouter)
rootRouter.use("/api/v1/id", petRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
