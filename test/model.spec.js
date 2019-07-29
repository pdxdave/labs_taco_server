const db = require('../database/dbConfig');
const Users = require('../models/UsersModel')

beforeEach(async () => {
    await db('users')
    .truncate()
})

describe("Users Model", () => {
  
    describe("Add a new user", () => {

        // checks to confirm there are no users
        it('should insert a new user yahoo', async () => {
            let doesUserExist = await db('users')
                    .where({first_name: "Frank"})
                    expect(doesUserExist).toHaveLength(0)

            // Adds a new user
            await Users.add({first_name: "Dwezil", last_name: "Zappa", email: "dz@you.com"})

            // Test to make sure user exists
            doesUserExist = await db('users')
                    .where({first_name: "Dwezil"})
                    expect(doesUserExist).toHaveLength(1)
            // Dwezil post confirmed in Insomnia
        })
    })

    describe("Find all users", () => {

        // passing two new users
        it('should return all users', async () => {
            await Users.add({first_name: "David Lee", last_name: "Roth", email: "dlr@you.com"})
            await Users.add({first_name: "Edward", last_name: "Van Halen", email: "evh@you.com"})

            let allUsers = await Users.find()
            expect(allUsers).toHaveLength(2)
            // David Lee Roth and Edward Van Halen posts confirmed in Insomnia
        })
    })

    describe("Delete a user by id", () => {

        // passing two new users, then the second one will be deleted
        it('should return all users', async () => {
            await Users.add({first_name: "David Lee", last_name: "Roth", email: "dlr@you.com"})
            await Users.add({first_name: "Edward", last_name: "Van Halen", email: "evh@you.com"})

        let delUser = await Users.remove(2)
        expect(delUser).toBe(1)
        // David Lee Roth post confirmed in Insomnia
    })
  })

  describe("Find a user by id", () => {
      // passing three new users, then the second one will be the target id
      it('should return all users', async () => {
        await Users.add({first_name: "Sylvester", last_name: "Stallone", email: "ss@you.com"})
        const targetUser = await Users.add({first_name: "Chuck", last_name: "Norris", email: "cn@you.com"})
        await Users.add({first_name: "Arnold", last_name: "Schwarzenegger", email: "as@you.com"})

        
        await Users.findById(2)
        expect(targetUser.first_name).toBe('Chuck')
    })
  })

//   describe("Update a user by id", () => {
//       // passing a new user
//       it('should return an updated user ', async () => {
//         // create an initial user
//         await Users.add({first_name: "Rob", last_name: "Halford", email: "rh@you.com"})

//         // updated user info
//         const newUser = {first_name: "Glen", last_name: "Tipton", email: "gt@you.com"}

//         let updatedUser = await Users.update(1, newUser)
//         console.log(updatedUser)
        
//         await Users.update(1)
//         const test = targetUpdate[0]["joe"]
//         expect(test).toBe('joe')
//     })
//    })

})