import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const nama_obat = db.define('nama_obat',{
    nama_obat: DataTypes.STRING,
},{
    freezeTableName:true
});
 
export default nama_obat;
 
(async()=>{
    await db.sync();
})();