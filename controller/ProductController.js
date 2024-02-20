const ProductSchema = require('../model/ProductSchema');

const findAllProducts = async (request,response) => {
    const page= parseInt(request.query.page) || 0;
    const size= parseInt(request.query.size) || 10;

    try{
        const totalCountData = await ProductSchema.countDocuments();
        const totalPages = Math.ceil(totalCountData/size);

        const skip = page * size; // offset

        const data = await ProductSchema.find({}).skip(skip).limit(size).exec();

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
    findAllProducts
}
