import pg from "pg"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/cc_pets"
})

class Animal {
  constructor({ id, name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id }) {
    this.id = id
    this.name = name
    this.img_url = img_url
    this.age = age
    this.vaccination_status = vaccination_status
    this.adoption_story = adoption_story
    this.adoption_status = adoption_status
    this.type_id = type_id
  }

  static async findAllType() {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM pet_types;")
      const petTypesData = result.rows
      const petTypes = petTypesData.map((petType) => {
        return new this(petType)
      })
      client.release()

      return petTypes

    } catch (error) {
      console.error(error)
      pool.end()
    }
  }

  static async findAllByType(type_id) {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM adoptable_pets WHERE type_id = $1", [type_id])
      const allOfTypeData = result.rows[0]
      const allOfType = allOfTypeData.map((ofType) => {
        return new this(ofType)
      })

      client.release()

      return allOfType

    } catch (error) {
      console.error(error)
      pool.end()
    }
  }

  static async findById(id) {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM adoptable_pets WHERE id = $1", [id])
      const specificPetData = result.rows[0]
      const specificPet = new this(specificPetData)

      client.release()

      return specificPet

    } catch (error) {
      console.error(error)
      pool.end()
    }
  }
}

