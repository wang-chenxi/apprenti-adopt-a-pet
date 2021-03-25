import pg from "pg"
import _ from "lodash"
const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/cc_pets"
})
class Animal {
  constructor({
    id,
    name,
    img_url,
    imgUrl,
    age,
    vaccination_status,
    vaccinationStatus,
    adoption_story,
    adoptionStory,
    adoption_status,
    adoptionStatus,
    type_id,
    typeId
  }) {
    this.id = id
    this.name = name
    this.imgUrl = img_url || imgUrl
    this.age = age
    this.vaccinationStatus = vaccination_status || vaccinationStatus
    this.adoptionStory = adoption_story || adoptionStory
    this.adoptionStatus = adoption_status || adoptionStatus
    this.typeId = type_id || typeId
  }
  static async findByType(typeId) {
    try {
      const client = await pool.connect()
      const result = await client.query("SELECT * FROM adoptable_pets WHERE type_id = $1", [typeId])
      const allOfTypeData = result.rows[0]
      const allOfType = allOfTypeData.map(ofType => {
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
  async saveAdoptRequest() {
    try {
      const client = await pool.connect()
      const query =
        "INSERT INTO adoptable_pets (name, image_url, age, vaccination_status, adoption_status, type_id) VALUES ($1, $2, $3, $4, $5, $6)"
      const values = [
        this.name,
        this.imageUrl,
        this.age,
        this.vaccinationStatus,
        this.adoptionStatus,
        this.typeId
      ]
      await client.query(query, values)
      const result = await client.query("SELECT * FROM adoptable_pets ORDER BY id DESC LIMIT 1")
      const newPet = result.rows[0]
      this.id = newPet.id
      client.release()
      return true
    } catch (error) {
      console.error(error)
      pool.end()
      return false
    }
  }
  isValid() {
    this.errors = {}
    const requiredFields = [
      "name",
      "image_url",
      "age",
      "vaccination_status",
      "adoption_status",
      "type_id"
    ]
    let isValid = true
    for (const requiredField of requiredFields) {
      this.errors[requiredField] = []
      if (!this[requiredField]) {
        isValid = false
        this.errors[requiredField].push("Can't be blank")
      }
    }
    return isValid
  }
}
export default Animal
