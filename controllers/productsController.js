const services = require('../services/productServices');

const fetchProduct = (req,res)=>{
    const result = services.allProducts();
    res.sendFile(result);
}

module.exports ={
    fetchProduct
}