import express from "express"
import getClientIndexPath from "../config/getClientIndexPath.js"

const router = new express.Router()

const clientRoutes = ["/", "/pets", "/adoptions/new", "/pets/:type", "/pets/pigs/:id", "/pets/bunnies/:id", "/pets/unicorns/:id"]
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath())
})

export default router
