const DiscountSchema = require('../model/DiscountSchema');


const saveData=(request,response)=>{
    discountData= new DiscountSchema({
        discountTitle:request.body.discountTitle,
        discountType:request.body.discountType,
        discount:request.body.discount,
        productId:request.body.productId,
    });
    discountData.save().then(result=>{
        return response.status(201).json(result);
    }).catch(error=>{
        return response.status(500).json(error);
    })
}
const loadAllData = async (request,response) => {

    const page= parseInt(request.query.page) || 0;
    const size= parseInt(request.query.size) || 10;

    try{
        const totalCountData = await DiscountSchema.countDocuments();
        const totalPages = Math.ceil(totalCountData/size);

        const skip = page * size; // offset

        const data = await DiscountSchema.find({}).skip(skip).limit(size).exec();

        return response.status(200).json({
            dataList:data,
            count:totalCountData
        })

    }catch (e) {
        console.log(e);
        return response.status(500).json(e);
    }
}

module.exports={
    loadAllData,saveData
}
