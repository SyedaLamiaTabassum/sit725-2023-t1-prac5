let collection = require('../models/fandom');

const postFandom = (req,res) => {
    let fandom = req.body;
    collection.postFandom(fandom, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllFandoms = (req,res) => {
    collection.getAllFandoms((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteFandom = (req,res) => {
    let fandom = req.body;
    collection.deleteOne(fandom, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postFandom,getAllFandoms}