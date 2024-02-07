const ProductSchema = require('../model/ProductSchema');
/*const findAllProducts = (request,response) => {
  const product = new ProductSchema({
    {
        description:,
        qty:,
        images:,
        spec:,
        unitprice:,
        productCategory:
    }
  });
}*/
const findAllProducts = (request,response) => {
    ProductSchema.find().then(result=>{
        response.status(200).json(result);
    })
}

module.exports={
    findAllProducts
}
