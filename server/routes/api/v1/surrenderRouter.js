import express from "express"
import Animal from "../../../models/Animal.js"

const surrenderRouter = new express.Router()

surrenderRouter.post("/", async (req, res) => {
  try {
    const newForm = req.body
    await Animal.saveSurrender(newForm)  
    if(Animal.saveSurrender(newForm)) {
      res.status(201).json({ })
    } else {
    res.status(422).json({})
    }
  } catch (error) {
    console.error(error)
    res.status(500)
  }
})

export default surrenderRouter