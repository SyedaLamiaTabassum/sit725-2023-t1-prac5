let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postFandom(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllFandoms(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllFandoms(req,res);
});


module.exports = router;