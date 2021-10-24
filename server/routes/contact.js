const express = require('express');
//const { DisplayHomePage, DisplayAboutPage, DisplayProjectsPage, DisplayServicesPage, DisplayContactPage } = require('../controllers');
const { DisplayListPage, DisplayAddPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage} = require('../controllers/contact');
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

//GET display contact-list view
router.get('/list', DisplayListPage);

//GET display /contact-list/add page.
router.get('/add', DisplayAddPage);

//GET display /contact-list/edit/:id page.
router.get('/edit/:id', DisplayEditPage);

//POST process /contact-list/add page
router.get('/add', ProcessAddPage);

//POST process /contact-list/edit/:id page
router.get('/edit/:id', ProcessEditPage);

//GET process /contact-list/delete/:id
router.get('/delete/:id', ProcessDeletePage);



//export default router;
module.exports = router;