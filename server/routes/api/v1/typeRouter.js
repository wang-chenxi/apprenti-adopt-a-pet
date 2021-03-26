import express from "express"
import Animal from "../../../models/Animal.js"

const typeRouter = new express.Router()

typeRouter.get("/:type", async (req, res) => {
  try {
    let type
    if (req.params.type == "pigs") {
      type = 1
    } else if (req.params.type == "bunnies") {
      type = 2
    } else if (req.params.type == "unicorns") {
      type = 3
    } else {
      res.status(500).json({ message: "invalid type" })
    }
    const pets = await Animal.findByType(type)
    console.log(JSON.stringify(pets))
    res.status(200).json({ pets: pets })
  } catch (error) {
    console.log(error)
    res.status(500).json({ errors: error })
  }
})

export default typeRouter
