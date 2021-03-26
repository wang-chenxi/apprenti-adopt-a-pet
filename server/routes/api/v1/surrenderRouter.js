import express from "express"
import Surrender from "../../../models/Surrender.js"
const surrenderRouter = new express.Router()
surrenderRouter.get("/", (req, res) => {
    res.render()
})
surrenderRouter.post("/", async (req, res) => {
    try {
        const newForm = req.body
        const surrender = new Surrender(newForm);
        if (await surrender.saveSurrender()) {
            res.status(201).json({})
        } else {
            res.status(422).json({})
        }
    } catch (error) {
        console.error(error)
        res.status(422)
    }
})
export default surrenderRouter