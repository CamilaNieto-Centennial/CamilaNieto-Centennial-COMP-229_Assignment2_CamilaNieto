const express = require('express');

const ContactModel = require('../models/contact');
//req: express.Request, res: express.Response, next:express.NextFunction
function DisplayContactListPage(req, res, next) {
    ContactModel.find(function(err, contactCollection){
        console.log("HERE");
        if(err){
            console.error(err);
            res.end(err);
        }

        //console.log(contactCollection);

        res.render('index', {title: 'Contact list', page: 'contact/contact-list', contact: contactCollection})

    })
    //res.render('index', {title: 'Home', page: 'home'});
  }
  exports.DisplayContactListPage = DisplayContactListPage;
