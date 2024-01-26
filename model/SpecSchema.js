const mongoose = require('mongoose');
const specSchema= new mongoose.Schema(
    {
        spec:{
            type:String,
            required:true
        }
    }
);

module.exports=mongoose.model('product',productSchema);
