const express = require('express');

const ContactModel = require('../models/contact');
//req: express.Request, res: express.Response, next:express.NextFunction
//(R)ead in CRUD
function DisplayListPage(req, res, next) {
    ContactModel.find(function(err, contactCollection){
        //console.log("HERE");
        if(err){
            console.error(err);
            res.end(err);
        }

        //console.log(contactCollection);

        res.render('index', {title: 'Contact list', page: 'contact/contact-list', contact: contactCollection})

    })
    //res.render('index', {title: 'Home', page: 'home'});
  }
  exports.DisplayListPage = DisplayListPage;

// Display (E)dit page
function DisplayEditPage(req, res, next) {
    let id = req.params.id;

    ContactModel.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        console.log(contactItemToEdit);
        res.render('index', { title: "Contact Edit", page: "contact/contact-edit", item: contactItemToEdit })
    })
}
exports.DisplayEditPage = DisplayEditPage;

// Display (C)reate page
function DisplayAddPage(req, res, next) {
    // show the edit view
    res.render('index', { title: 'Add Contact', page: 'contact/contact-edit', item: '' });
}
exports.DisplayAddPage = DisplayAddPage;

// Process (E)dit page
function ProcessEditPage(req, res, next) {
    let id = req.params.id;

    let updatedItem = new ContactModel({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });

    ContactModel.updateOne({ _id: id }, updatedItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact/list');
    })
}
exports.ProcessEditPage = ProcessEditPage;

// Process (C)reate page
function ProcessAddPage(req, res, next){//):void{...}

    let newItem = new ContactModel({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });

    ContactModel.create(newItem, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact/list');
    })
}
exports.ProcessAddPage = ProcessAddPage;

// Process (D)elete page
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;

    ContactModel.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact/list');
    })
}

exports.ProcessDeletePage = ProcessDeletePage;



