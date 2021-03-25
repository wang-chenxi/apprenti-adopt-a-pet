import pg from "pg"
// import path from "path"
// import LineReader from "line-reader"
// import { fileURLToPath } from "url"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/cc_pets"
})

class Seeder {
  static async seed() {
    try {
      const type_ids = [{ type: "Pigs" }, { type: "Bunnies" }, { type: "Unicorns" }]

      for (let i = 0; i < type_ids.length; i++) {
        const type_id = type_ids[i]
        const queryString = `INSERT INTO pet_types (type) VALUES ('${type_id.type}');`
        await pool.query(queryString)
      }

      const pigsData = await pool.query("SELECT * FROM pet_types WHERE type = 'Pigs';")
      const pigs = pigsData.rows[0]
      const bunniesData = await pool.query("SELECT * FROM pet_types WHERE type = 'Bunnies';")
      const bunnies = bunniesData.rows[0]
      const unicornsData = await pool.query("SELECT * FROM pet_types WHERE type = 'Unicorns';")
      const unicorns = unicornsData.rows[0]

      const adoptablePets = [
        {
          name: "Penelope",
          img_url:
            "https://opimedia.azureedge.net/-/media/images/men/editorial/blogs/homesteading-and-livestock/the-truth-about-mini-pigs/rsz_img_5741-media.jpg",
          age: 3,
          vaccination_status: true,
          adoption_story:
            "Penelope is a frisky young girl looking for her forever home. She loves peanuts, belly rubs, and long naps in the sun.",
          adoption_status: "Not adopted",
          type_id: pigs
        }
      ]

      for (let i = 0; i < adoptablePets.length; i++) {
        const adoptablePet = adoptablePets[i]
        const queryString = `INSERT INTO adoptable_pets (name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id) VALUES ('${adoptablePet.name}', '${adoptablePet.img_url}', ${adoptablePet.age}, ${adoptablePet.vaccination_status}, '${adoptablePet.adoption_story}', '${adoptablePet.adoption_status}', '${adoptablePet.type_id.id}')`
        console.log(adoptablePet.age)
        await pool.query(queryString)
      }
      console.log("Seeding complete")
      pool.end()
    } catch (error) {
      console.log(error)
      pool.end()
    }
  }
}

export default Seeder
