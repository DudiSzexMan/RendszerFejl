const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/contact/:a', async(req, res) => {
  // const email = req.body.email
  // const website = req.body.website
  const {email, website, message} = req.body
  const action = req.params.a
  
  switch(action) {
    case "send":
      const contactData = {email: email, website: website, message: message}
      const newContact = new schemas.Contact(contactData)
      const saveContact = await newContact.save()
      if (saveContact) {
        res.send('Message sent. Thank you.')
      } else {
        res.send('Failed to send message.')
      }
      break;

      default:
        res.send('Invalid Request')
        break
  }

  res.end()
})

router.get('/users', async (req, res) => {

  const userData = 
  [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "website": "hildegard.org"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "website": "anastasia.net"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "Nathan@yesenia.net",
      "website": "ramiro.info"
    }
  ]
  
  res.send(userData)
})

module.exports = router