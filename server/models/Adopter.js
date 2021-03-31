import pg from "pg"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/cc_pets"
})
class Adopter {
  constructor({
    id,
    name,
    phone_number,
    phoneNumber,
    email,
    home_status,
    homeStatus,
    application_status,
    applicationStatus,
    pet_id,
    petId
  }) {
    this.id = id
    this.name = name
    this.phoneNumber = phone_number || phoneNumber
    this.email = email
    this.homeStatus = home_status || homeStatus
    this.applicationStatus = application_status || applicationStatus
    this.applicationStatus = "pending"
    this.petId = pet_id || petId
  }

  async saveAdoptRequest() {
    try {
      const client = await pool.connect()
      const query =
        "INSERT INTO adoption_applications (name, phone_number, email, home_status, application_status, pet_id) VALUES ($1, $2, $3, $4, $5, $6)"
      const values = [
        this.name,
        this.phoneNumber,
        this.email,
        this.homeStatus,
        this.applicationStatus,
        this.petId
      ]
      await client.query(query, values)

      const result = await client.query(
        "SELECT * FROM adoption_applications ORDER BY id DESC LIMIT 1"
      )
      const newAdoption = result.rows[0]

      this.id = newAdoption.id

      client.release()

      return true
    } catch (error) {
      console.error(error)
      pool.end()
      return false
    }
  }
}

export default Adopter
