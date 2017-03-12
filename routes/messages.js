'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('messages')
    .select('id', 'name', 'message')
    .orderBy('id')
    .then((messages) => {
      res.send(messages);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
const id = Number.parseInt(req.params.id);
if (Number.isNaN(id)){
  return next();
}
  knex('messages')
    .select('id', 'name', 'message')
    .where('id', req.params.id)
    // .first()

    .then((row) => {
      var obj = row[0];
      res.send(obj);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  var name = req.body.name;
  var message = req.body.message;
  console.log("NAME: ", name);
  knex('messages')//queries the db
    .returning(['name', 'message'])
    .insert({
      name: name,
      message: message
    })
    .then((row) => {
      console.log("row: ",row);
      res.send(row[0]);
    })
    .catch((err) => {
      next(err);
    });

});

//
router.patch('/:id', (req, res, next) => {
  var name = req.body.name;
  var message = req.body.message;
  knex('messages')
    .where('id', req.params.id)
    .update({
      name: name,
      message: message
    }, ['id', 'name', 'message'])
    // .orderBy('id')
    .then((data) => {
      console.log(data);
      res.send(data[0]);
    })
    .catch(function(err){
      next(err);
    })

  });
//
router.delete('/:id', (req, res, next) => {
  var message= '';

  knex('messages')
    .where('id', req.params.id)
    .select('id', 'name', 'message')
    .first()
    .then((result) => {
      message = result;
      return knex('messages')
        .del()
        .where('id', req.params.id);
    })
    .then(() => {
      console.log(message);
      res.send(message);


    });
});
