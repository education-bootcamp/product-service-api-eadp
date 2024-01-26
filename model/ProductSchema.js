const mongoose = require('mongoose');
const productSchema= new mongoose.Schema(
    {
        description:{
            type:String,
            required:true
        },
        qty:{
            type:Number,
            required:true
        },
        images:{
            type:Array,
            required:true
        },
        spec:{
            type:Array,
            required:true
        },
        unitprice:{
            type:Number,
            required:true
        },
        productCategory:{
            type:Object,
            required:true
        }
    }
);

module.exports=mongoose.model('product',productSchema);
