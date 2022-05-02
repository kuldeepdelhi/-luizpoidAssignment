const express = require('express');
const router = express.Router();

 const adminController=require("../controllers/admincontroller")
 const websiteController = require('../controllers/websitecontroller')
 const articlesController = require('../controllers/articlecontroller')
 const subscriptionController = require('../controllers/subscriptioncontroller')
 const Middleware = require('../middleware/verify')

  router.post('/registerAdmin',adminController.registerAdmin)
  router.post('/loginAdmin',adminController.loginAdmin)

  router.post('/Website',websiteController.resisterWebsite)
  router.post('/article',Middleware.verify,articlesController .registerarticle)

  router.post('/subscribeEmail',subscriptionController.SubscribeEmail)



module.exports = router;