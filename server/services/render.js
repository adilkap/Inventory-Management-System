const axios = require('axios');
const csv = require('csv-express');


exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/items')
        .then(function(response){
            res.render('index', { items : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.export = (req, res) => {
    axios.get('http://localhost:3000/api/items')
        .then(function(response){
            var filename = 'inventory_exported.csv'
            var date = new Date;
            var stringDate = date.toISOString().slice(0,10).replace(/-/g,"");

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader("Content-Disposition", 'attachment; filename=' + stringDate + "_" + filename);
            res.csv(response.data, true);
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_item = (req, res) =>{
    res.render('add_item');
}

exports.update_item = (req, res) =>{
    axios.get('http://localhost:3000/api/items', { params : { id : req.query.id }})
        .then(function(itemdata){
            res.render("update_item", { item : itemdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}