const express = require('express');
//const { DisplayHomePage, DisplayAboutPage, DisplayProjectsPage, DisplayServicesPage, DisplayContactPage } = require('../controllers');
const { DisplayContactListPage } = require('../controllers/contact');
let router = express.Router();

//Mongo Database Name
//Mongo Collection Name
//Mongo Document Structure

/*

http://server-url/contact/list
http://server-url/contact/create
http://server-url/contact/edit/:id
http://server-url/contact/delete/:id

*/

//GET display contact list view
router.get('/list', DisplayContactListPage);

//GET display contact item edit







//export default router;
module.exports = router;