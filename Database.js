import {Sequelize} from "sequelize";
 
const db = new Sequelize('obat','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;