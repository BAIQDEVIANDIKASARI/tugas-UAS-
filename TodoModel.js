import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Todo = db.define('tabel_distributor',{
    tabel_distributor: DataTypes.STRING,
},{
    freezeTableName:true
});
 
export default Todo;
 
(async()=>{
    await db.sync();
})();