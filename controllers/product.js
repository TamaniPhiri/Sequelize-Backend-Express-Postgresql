const product=require('../models/product');

exports.createProduct = async(req, res) => {
    try {
        const{name, description,price}=req.body;
        if(!name||!description||!price){
            return res.status(400).json({message:"Please enter a name and description"});
        }
        const products = await product.create({name, description, price});
        res.status(200).json({product: products});
    } catch (error) {
        
    }
}

exports.getAllProducts = async(req,res)=>{
    try {
        const products= await product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json("An error occurred", error);
    }
}