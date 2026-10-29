const path = require('path');

const allProducts = ()=>{
    return path.join(__dirname, '..', 'view', 'product.html');
}

module.exports ={
    allProducts
}