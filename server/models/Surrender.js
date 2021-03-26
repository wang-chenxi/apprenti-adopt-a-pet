import pg from "pg"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/cc_pets"
})
class Surrender {
  constructor({
    id,
    name,
    phone_number,
    phoneNumber,
    email,
    petName,
    pet_name,
    pet_image_url,
    petImageURL,
    pet_age,
    petAge,
    vaccination_status,
    vaccinationStatus,
    pet_type_id,
    petTypeID,
    adoptionStatus,
    adoption_status
  }) {
    this.id = id
    this.name = name
    this.phoneNumber = phone_number || phoneNumber
    this.email = email
    this.petName = pet_name || petName
    this.petImageURL = pet_image_url || petImageURL
    this.petAge = pet_age || petAge
    this.vaccinationStatus = vaccination_status || vaccinationStatus
    this.adoptionStatus = adoption_status || adoptionStatus
    this.petTypeID = pet_type_id || petTypeID
    this.applicationStatus = "pending"
    console.log(JSON.stringify(this), id, name)
  }

  async saveSurrender() {
    try {
      const client = await pool.connect()
      const query =
        "INSERT INTO pet_surrender_applications (name, phone_number, email, pet_name, pet_age, pet_type_id, pet_image_url, vaccination_status, application_status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
      const values = [
        this.name,
        this.phoneNumber,
        this.email,
        this.petName,
        this.petAge,
        this.petTypeID,
        this.petImageURL,
        this.vaccinationStatus,
        this.applicationStatus
      ]
      console.log(
        this.name,
        this.phoneNumber,
        this.email,
        this.petName,
        this.petAge,
        this.petTypeID,
        this.petImageURL,
        this.vaccinationStatus
      )
      await client.query(query, values)
      const result = await client.query(
        "SELECT * FROM pet_surrender_applications ORDER BY id DESC LIMIT 1"
      )
      const newSurrender = result.rows[0]
      console.log(newSurrender)
      this.id = newSurrender.id
      client.release()
      return true
    } catch (error) {
      console.error(error)
      //pool.end()
      return false
    }
  }
}
export default Surrender
