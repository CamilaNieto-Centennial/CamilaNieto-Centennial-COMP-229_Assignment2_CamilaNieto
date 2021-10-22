"use strict";
const express = require('express');
//import express from 'express';

function DisplayHomePage(req, res, next) {
    res.render('index', {title: 'Home', page: 'home'});
  }
  exports.DisplayHomePage = DisplayHomePage;

  function DisplayAboutPage(req, res, next) {
    res.render('index', {title: 'About Me', page: 'about'});
  }
  exports.DisplayAboutPage = DisplayAboutPage;

  function DisplayProjectsPage(req, res, next) {
    res.render('index', {title: 'Projects', page: 'projects'});
  }
 exports.DisplayProjectsPage = DisplayProjectsPage;

function DisplayServicesPage(req, res, next) {
    res.render('index', {title: 'Services', page: 'services'});
  }
exports.DisplayServicesPage = DisplayServicesPage;

function DisplayContactPage(req, res, next) {
    res.render('index', {title: 'Contact', page: 'contact'});
  }
exports.DisplayContactPage = DisplayContactPage;