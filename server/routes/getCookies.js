const express = require('express')
const router = express.Router()

// const db = require('../db')
const monsters = [
    {
        id: 1,
         name:"Elmo",
         image:""
    },
    {
        id:2,
         name:"Cookie monster",
          image:""
        }
]

router.get('/', function (req, res) {
//   res.json(db.getWidgets())
    res.json(monsters)

})



module.exports = router