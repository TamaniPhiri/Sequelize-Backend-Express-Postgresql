const {DataTypes} = require('sequelize');
const db = require('../utils/db');

const product=db.define('product',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true,
    },
    description:{
        type:DataTypes.STRING,
        required:true,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
        required:true
    }
});

module.exports =product;