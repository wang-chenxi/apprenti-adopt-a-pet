import Animal from "../../../models/Animal.js"

const petRouter = new express.Router()

petRouter.get("/pigs/:id", async (req, res) => {
  try {
    const pigId = req.params.id
    const pig = await Animal.findById(pigId)
    return res.status(200).json({ pig: pig })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

petRouter.get("/bunnies/:id", async (req, res) => {
  try {
    const bunnieId = req.params.id
    const bunnie = await Animal.findById(bunnieId)
    return res.status(200).json({ bunnie: bunnie })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

petRouter.get("/unicorns/:id", async (req, res) => {
  try {
    const unicornId = req.params.id
    const unicorn = await Animal.findById(unicornId)
    return res.status(200).json({ unicorn: unicorn })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

petRouter.post("/", async (req, res) => {
  try {
    const formData = req.body
    const newPet = new Animal(formData)

    if (await Animal.saveAdoptRequest()) {
      return res.status(201).json({ pet: newPet })
    } else {
      return res.status(422).json({ errors: newPet.errors })
    }
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default petRouter
