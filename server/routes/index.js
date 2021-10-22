//COMP 229-005 Assignment 1
//Author: Camila Nieto
//ID: 301175110

//import express from 'express';
const express = require('express');
const { DisplayHomePage, DisplayAboutPage, DisplayProjectsPage, DisplayServicesPage, DisplayContactPage } = require('../controllers');
let router = express.Router();

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET About Us page. */
router.get('/about', DisplayAboutPage);

/* GET Projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET Services page. */
router.get('/services', DisplayServicesPage);


/* GET Contact Us page. */
router.get('/contact', DisplayContactPage);

//export default router;
module.exports = router;
