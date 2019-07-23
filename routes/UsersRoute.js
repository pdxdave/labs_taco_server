/*
  All of the functions are working. Tested with Insomnia
*/

// bring in express
const express = require('express');

// create router
const router = express.Router();

// bring in model
const Users = require('../models/UsersModel');


// Find All Users
router.get('/users', async (req, res) => {
    try {
        const test = await Users.find()
        res.status(200).json(test)
    } catch (error) {
        res.status(500).json({
            message: "There was a server error"
        })
    }
})

// Find By ID
router.get('/user/:id', async (req, res) => {
    try {
        const test = await Users.findById(req.params.id)
        if(test.length == 0){
            res.status(404).json({
                message: "The ID could not be found"
            })
        }else{
            res.status(200).json(test);
        }
    } catch (error) {
        res.status(500).json({
            message: "There was a server error"
        })
    }
})

// ADD User
router.post('/add', async (req, res) => {
    try {
        
        const {first_name, last_name, email} = req.body

        if(!first_name || !last_name || !email){
            res.status(400).json({
                message: "Bad request. Make sure all information is posted"
            })
        } else {
            const test = await Users.add(req.body)
            res.status(200).json(test)
        }
    } catch (error) {
        res.status(500).json({
            message: "There was a server error"
        })
    }
})

// UPDATE User
router.put('/update/:id', async (req, res) => {
    try {

        const id = req.params.id
        const {first_name, last_name, email} = req.body 
        const test = await Users.update(id, req.body)

      if(!first_name || !last_name || !email){
          res.status(400).json({
             message: "Bad request. Make sure all information is posted"
         })
      } else if (!id){
          res.status(404).json({
              message: "The ID could not be found"
          })
      } else {
          res.status(200).json(test)
      }
    } catch (error) {
        res.status(500).json({
            message: "There was a server error"
        })
    }
})


// REMOVE User
router.delete('/remove/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const test = await Users.remove(id) // ?
        if(!id){
            res.status(404).json({
                message: "There is no ID by that number"
            })
        } else {
            const clients = await Users.find()
            res.status(200).json(clients)
        }
    } catch (error) {
        res.status(500).json({
            message: "There was a server error"
        })
    }
})

module.exports = router;

