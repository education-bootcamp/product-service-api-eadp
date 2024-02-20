const mongoose = require('mongoose');
const discountSchema= new mongoose.Schema(
    {
        discountTitle:{
            type:String,
            required:true
        },
        discountType:{
            type:String,
            required:true
        },
        discount:{
            type:Number,
            required:true
        },
        productId:{
            type:Object,
            required:true
        }
    }
);

module.exports=mongoose.model('discount',discountSchema);
