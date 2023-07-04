const {Sequelize}= require('sequelize')

const sequelize = new Sequelize(
    'postgres',
    'postgres', 
    'troi1576',
    {
        host: 'localhost',
        dialect:'postgres'
    }
    )

module.exports=sequelize;