const mongoose = require('mongoose');
const productCategorySchema= new mongoose.Schema(
    {
        category:{
            type:String,
            required:true
        }
    }
);

module.exports=mongoose.model('productCategory',productCategorySchema);
