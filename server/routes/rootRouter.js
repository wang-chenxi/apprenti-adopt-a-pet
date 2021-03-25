import express from "express"
import clientRouter from "./clientRouter.js"
// import typeRouter from "./typeRouter.js"
// import petRouter from "./petRouter.js"
import surrenderRouter from "./surrenderRouter.js"

const rootRouter = new express.Router()

// rootRouter.use("api/v1/types", typeRouter)
// rootRouter.use("api/v1/pets", petRouter)
rootRouter.use("./api/v1/surrenderRouter.js", surrenderRouter)

rootRouter.use("/", clientRouter)

export default rootRouter
