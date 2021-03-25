import { DEFAULT_EXTENSIONS } from "@babel/core"
import pg from "pg"

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
        },

        {
          name: "Ham Solo",
          img_url:
            "https://preview.redd.it/y3gxrk5f0ee61.jpg?width=3024&format=pjpg&auto=webp&s=2496c27cc7f83380593df88436d9e879e3c558b5",
          age: 5,
          vaccination_status: false,
          adoption_story:
            "Much like his starship piloting namesake, when the food is on, Ham Solo can move at .5 past light speed",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "Ziggy",
          img_url: "https://www.pigspeace.org/stories/img/ziggy.jpg",
          age: 3,
          vaccination_status: true,
          adoption_story:
            "Born with three legs Ziggy does not know any other life. She is up and about like all pigs ready for breakfast eery morning.",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "Vegans Nightmare",
          img_url:
            "https://resources.stuff.co.nz/content/dam/images/1/4/n/f/c/1/image.related.StuffLandscapeSixteenByNine.1240x700.14ne3v.png/1439935461934.jpg?format=pjpg&optimize=medium",
          age: 6,
          vaccination_status: false,
          adoption_story:
            "Don''t let this handsome face fool you. If you so much as whisper bacon in his vicicnity, he won''t forget it.",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "Squiggle",
          img_url: "https://www.pigspeace.org/stories/img/gingersnapSept09.jpg",
          age: 20,
          vaccination_status: true,
          adoption_story:
            "Squiggles is our most senior pig. While he moves a little slower, he still has all the charm and character of his youth",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "Huck",
          img_url:
            "https://americanminipigassociation.com/wp-content/uploads/2015/03/image-3-1024x1024.jpeg",
          age: 4,
          vaccination_status: true,
          adoption_story:
            "Huck is a lovable loner who loves entertaining visitors and getting up to mischief when no one is paying attention to him.",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "Gizmo",
          img_url: "https://www.pigspeace.org/stories/img/daisyOnPorch.jpg",
          age: 2,
          vaccination_status: false,
          adoption_story: "Gizmo was brought to us as the runt of the litter.",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "Buttons",
          img_url:
            "https://opimedia.azureedge.net/-/media/Images/MEN/Editorial/Blogs/Homesteading-and-Livestock/The-Truth-About-Mini-Pigs/rsz_img_5741.jpg?h=550&w=550&la=en&hash=84B1E41EE23E0DF8E79F04B83D45E53E084AF0A9",
          age: 1,
          vaccination_status: false,
          adoption_story:
            "Buttons is a cute little scamp that charms everyone he meets. Rub his tummy and you''ll be friends forever.",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "Ella",
          img_url: "https://www.pigspeace.org/stories/img/ella1.jpg",
          age: 11,
          vaccination_status: true,
          adoption_story:
            "Ella was given up shortly after her initial adoption, but this hasn''t dampeened her spirit. She loves playing with other animals.",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "McKisser",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Juliana_pig_wears_harness.jpg/229px-Juliana_pig_wears_harness.jpg",
          age: 2,
          vaccination_status: false,
          adoption_story:
            "Meet McKisser. She loves long walks, meeting new friends, and exploring new places.",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "Pickles",
          img_url: "https://www.pigspeace.org/stories/img/pickles2009b.jpg",
          age: 12,
          vaccination_status: true,
          adoption_story: "Pickles is still very inquisitive and friendly, and loves to explore.",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "Honey",
          img_url: "https://www.pigspeace.org/stories/img/1920/honey_talks.jpg",
          age: 7,
          vaccination_status: true,
          adoption_story:
            "Honey loves spending time with the other pigs and playing find the peanut in the hay.",
          adoption_status: "Not adopted",
          type_id: pigs
        },

        {
          name: "Thumper",
          img_url: "https://www.womansworld.com/wp-content/uploads/2019/09/bunny-photos.jpg",
          age: 4,
          vaccination_status: true,
          adoption_story:
            "Thumper is a special baby bunny who was found on the side of a road where he had wandered from his nest. He was scooped up by some caring citizens and brought to foster for socialization. He adjusted to being an indoor bunny very quickly. Thumper''s favorite thing is when his foster mom sits in his pen and lets him run around in circles, jumping on and off her lap at will.",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Coco",
          img_url: "https://static.diffen.com/uploadz/9/97/Rabbit-1.jpg",
          age: 6,
          vaccination_status: true,
          adoption_story:
            "Coco was rescued from a meat farm, after breeding her too much, she was kept outside in a small wire cage with weeds growing through it. She is shy but getting better all the time. She does come up for treats, she loves treats. So we are using that to help make her more comfortable around people after being so abused. We would love to find her a loving and safe home.",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Snowball",
          img_url: "https://www.peta.org.uk/wp-content/uploads/2020/04/rabbit-white-unsplash.jpg",
          age: 3,
          vaccination_status: false,
          adoption_story:
            "Snowball is friendly, sociable foodies who loves veggies and has been known to scale couches and laps in search of treats! Like most bunnies, the playful, snuggly boy loves to lounge all day, perfect companions for your Zoom meetings. Snowball is now neutered and ready for adoption as an individual, to live either as a bachelor or perhaps with the right bun lady. :-) ",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Cinnabun",
          img_url: "https://www.petakids.com/wp-content/uploads/2015/04/Bunny-Outside.jpg",
          age: null,
          vaccination_status: false,
          adoption_story:
            "Cinnabun is happiest as a solo rabbit with close human friends. He is a gentle sweetheart and would love a quiet space where he can relax after hopping around. Like many rabbits, he doesn''t do well with being picked up, but loves gentle attention!",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Lilly",
          img_url:
            "https://www.treehugger.com/thmb/ZjkSeSjq8OZ6rpZ1GN10iMuorrY=/2966x2096/filters:fill(auto,1)/GettyImages-953005498-4ca60c6c2c5f4b0e881b2746ad5f17ef.jpg",
          age: 8,
          vaccination_status: null,
          adoption_story:
            "Meet Lilly! This cute little mustached bunny can be a bit shy at first but she’s got such a cute personality when she gets to know you. She prefers a patient adopter who will give her enough time to let her shine. She loves hiding under blankets and sometimes hides so well. She loves getting talked to and sits for pets. She’s not super playful but does occasionally do a burst of binkies!",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Oscar",
          img_url: "https://miro.medium.com/max/12032/1*99r7mbdm30qA1xrSJBuQjw.jpeg",
          age: null,
          vaccination_status: false,
          adoption_story:
            "This boy is still looking for his forever home! He has settling in quite well to his surroundings and has gotten use to having a large space to run around in as well as free roam while the family is home. His litter habits, temperament and personality would suite any household!",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Muffin",
          img_url:
            "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/100388922-saving-bunny-money.jpg",
          age: 2,
          vaccination_status: null,
          adoption_story:
            "Meet Muffin! Muffin was originally a stray, until some kind people rescued him and his brother. (They don’t live together) Muffin is a bit territorial, but he is full of personality. He loves to play, and cardboard is a favorite of his. He would not do well in a home with young kids, as he has nipped people before.",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Angora",
          img_url:
            "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555922464/shape/mentalfloss/istock_000011513454_small.jpg",
          age: 9,
          vaccination_status: true,
          adoption_story:
            "Meet Angora .This is sweet girl is looking for her forever home. Angora is a lion head mix that came to the shelter originally as part of an investigation. She is a bit of a frustrated girl and does need work on her behavior, she can get slightly territorial and protective of her space. She would do best in a home with older children.Angora is a senior bunny looking for a nice warm home to retire in.",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Peanut",
          img_url:
            "https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2019/09/national-bunny-day-640x514.jpg",
          age: 3,
          vaccination_status: false,
          adoption_story:
            "Peanut just came to us after being rescued from living outside. She is a sweet little bunny who is looking for someone who willing gives her attention. Peanut has a lot of spunk and loves to play and eat! She will be vaccinated and spayed before going to her forever home but we are hoping to get a forever home lined up for this adorable bunny for when she is ready to go home!",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Vanilla",
          img_url:
            "https://www.rd.com/wp-content/uploads/2020/04/GettyImages-694542042-e1586274805503.jpg",
          age: 0,
          vaccination_status: false,
          adoption_story:
            "Vanilla is sweet and loves food. She even found a way to escape her pen to get to more food. She is pretty big and would need someone who was willing to make sure she doesn''t over eat. She doesn''t mind being held, and loves to be pet.",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Pepper",
          img_url: "https://www.ddfl.org/wp-content/uploads/2018/03/bunnies-easter.png",
          age: 8,
          vaccination_status: true,
          adoption_story:
            "Pepper is a handsome bunny. He sometimes likes to get into some minor mischief and will make you laugh.",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Charlie",
          img_url:
            "https://www.vmcdn.ca/f/files/rmotoday/2020/20200910/20200908-canmore-rabbit-0086.jpg",
          age: 6,
          vaccination_status: null,
          adoption_story:
            "A word from Charlie''s rescuers and current foster family: We don''t know much about him other than he loves to be snuggled, loves carrots/apples/spinach. He goes potty in one location. He is active, eats & drinks well. He enjoys sitting on top of his hutch and hopping around when he''s not being held or in his hutch.",
          adoption_status: "Not adopted",
          type_id: bunnies
        },

        {
          name: "Lavendar",
          img_url:
            "https://d33kvxw2ykf996.cloudfront.net/wp-content/uploads/2015/02/Lavender-Leather-Halter-Champagne-Horn-1350x900-920x614.jpg",
          age: 17,
          vaccination_status: null,
          adoption_story:
            "Lavendar is a 6th generation golden horned unicorn, meaning whoever adopts her is sure to find great fortune. Don''t miss out on this once in a lifetime opportunity!",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Rainbow",
          img_url: "https://images-na.ssl-images-amazon.com/images/I/61bdCV544HL._SL1001_.jpg",
          age: 36,
          vaccination_status: null,
          adoption_story:
            "Rainbow is a loving and brave unicorn who loves nothing more than a delicious magical carrot and a good scratch behind the ear. Are you ready to meet your most special of friends?",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Sassy",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhEqCSLrujI5srE_MS7nbLexPEhZnLlDPg4A&usqp=CAU",
          age: 9,
          vaccination_status: null,
          adoption_story:
            "Do you love a great hair flip? Then Sassy is just the unicorn for you. With her luscious flowing mane, you can be sure your attitude will always be on point!",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Horatio",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaDXtGHlU0UlxLCKDv1kjzsrFrRnJ3-KZaw&usqp=CAU",
          age: 13,
          vaccination_status: null,
          adoption_story:
            "Horatio was rescued from a marauding band of mischevious unicorns known as The Unithorns. Despite this rough upbringing, Horatio''s strong moral character lead him to seek out an adoptive parent and a better life. Take a chance on Horatio, it''ll be the best decision you ever made!",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Bella",
          img_url: "https://www.simplemost.com/wp-content/uploads/2018/05/unicorn.jpg",
          age: 5,
          vaccination_status: null,
          adoption_story:
            "Bella is just a youngster, but she already knows what she wants in life. A warm and loving home to spread her magic in. Already fully grown, she''s a great fit for those in need of lots of joy in a small package!",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Tanya",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QsneOYgJ_yJY64azxqpPPpuhk_BUwJXXLw&usqp=CAU",
          age: 26,
          vaccination_status: null,
          adoption_story:
            "Tanya is ready for love, so much so that she''s waiting on a golden beach for you! If you''re ready to take the big leap, look no further.",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Bruce",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54XM1yZpUQRB-DkVJZmjUg_xYfiYxWLhnfg&usqp=CAU",
          age: 18,
          vaccination_status: null,
          adoption_story:
            "Do you ever feel like a good nuzzle on your neck is all that''s missing from your life? Then we have just the companion for you! Bruce is world renowned for his nuzzling abilities, said to bring rejuvenation and extended life to all he touches. Bring Bruce home today!",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Twyla",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyegFJnQwrRojP9-MKr_Rx79hWunu1hAbBJG8S48W4dB-MLaZle3egVIxe1g&usqp=CAc",
          age: 42,
          vaccination_status: null,
          adoption_story:
            "Twyla is an exceptionally special unicorn. Her rich, lustrous coat has magical healing properties that cure all sadness with a simple touch! Despite this precious gift, Twyla is in need a a loving home. Don''t delay, and risk missing out on this amazing forever friend.",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Sterling",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6K7B-nXzptM24ueX781WCo94fsZ-DU9qrw&usqp=CAU",
          age: 31,
          vaccination_status: null,
          adoption_story:
            "Sterling is a unicorn for all seasons. As comfortable in a warm barn as a magical fairy ball, he''ll be pleased to accompany you to the ends of the Earth. A lover of the arts, Sterling especially enjoys listening to classical music while you brush his strong yet gentle back. He''d be a wonderful addition to any good family",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Mystique",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpvCbWs6YWT06hy8LWBcHwILteEtsPYHHoSA&usqp=CAU",
          age: 54,
          vaccination_status: null,
          adoption_story:
            "Mystique is the most magical of unicorns. As a 10th generation golden horned unicorn she has the ability to change her mane to whatever beautiful color she wants. Additionally, she has years of experience dealing with young children and is comfortable taking on riders. You don''t find Mystique every day, grab the opportunity while you can!",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Charlie",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYJPFPE7es8KIVX3qxHzemO1Uh_7xZ5EITw&usqp=CAU",
          age: 7,
          vaccination_status: null,
          adoption_story:
            "Charlie is as sweet as they come. Born with the gift of an eternally youthful appearance, you can be sure Charlie will maintain the same adorable appearance to match his adorable personality. You''ll be shocked how much love fits in this small package!",
          adoption_status: "Not adopted",
          type_id: unicorns
        },

        {
          name: "Valentino",
          img_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBr-s7-jYkp8aeefAKhk7p3dlJKYZaLOYXUw&usqp=CAU",
          age: 29,
          vaccination_status: null,
          adoption_story:
            "One word: Heartthrob. Known far and wide for his charm, he is colloquially known as Mr Steal-Your-Heart. If you''re ready to meet the love of your life, you''ve found \"The One\"",
          adoption_status: "Not adopted",
          type_id: unicorns
        }
      ]

      for (let i = 0; i < adoptablePets.length; i++) {
        const adoptablePet = adoptablePets[i]
        const queryString = `INSERT INTO adoptable_pets (name, img_url, age, vaccination_status, adoption_story, adoption_status, type_id) VALUES ('${adoptablePet.name}', '${adoptablePet.img_url}', ${adoptablePet.age}, ${adoptablePet.vaccination_status}, '${adoptablePet.adoption_story}', '${adoptablePet.adoption_status}', '${adoptablePet.type_id.id}')`
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
