const fetchProduct = (req,res)=>{
    const data = req.body;

    res.json({value : data.productName});
}

module.exports ={
    fetchProduct
}