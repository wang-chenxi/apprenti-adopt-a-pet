import express from "express"
import Adopter from "../../../models/Adopter.js"
import Animal from "../../../models/Animal.js"

const petRouter = new express.Router()

petRouter.get("/:id", async (req, res) => {
  try {
    const petId = req.params.id
    const pet = await Animal.findById(petId)
    return res.status(200).json({ pet: pet })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

petRouter.post("/", async (req, res) => {
  try {
    const formData = req.body
    const newAdopter = new Adopter(formData)
    console.log(newAdopter)
    if (await newAdopter.saveAdoptRequest()) {
      return res.status(201).json({})
    } else {
      return res.status(422).json({})
    }
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default petRouter
