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
       res.status(error.status).json({message:"Error creating product"}); 
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

exports.getProductByID = async(req,res)=>{
    try {
        const {id}=req.params;
        if(!id){
            return res.status(400).json({message:"Enter valid ID"});
        }
        const products= await product.findOne({
            where:{
                id:id
            }
        })
        return res.status(200).json(products);
    } catch (error) {
        res.status(400).json("An error occurred while getting product", error);
    }
}

exports.updateProductByID = async(req,res)=>{
    try {
        const{id}=req.params;
        if(!id){
            return res.status(400).json("Please enter a valid ID")
        }
        const { name, description, price } = req.body;

        if (!name || !description || !price) {
            return res.status(400).json({ message: "Please provide name, description, and price" });
          }
        
        const products=await product.findOne({where: {id:id}})

        if (!products) {
            return res.status(404).json({ message: "Product not found" });
        }
        products.name=name;
        products.description=description;
        products.price=price;

        await products.save();

        return res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
       res.status(400).json("An error occurred", error); 
    }
}