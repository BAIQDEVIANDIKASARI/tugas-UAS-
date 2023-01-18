import nama_obat from "../models/nama_obat.js";
 
export const nama_obat = async(req, res) =>{
    try {
        const response = await nama_obat.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const gettabel_obatById = async(req, res) =>{
    try {
        const response = await nama_obat.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createnama_obat = async(req, res) =>{
    try {
        await nama_obat.create(req.body);
        res.status(201).json({msg: "Todo Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updatenama_obat = async(req, res) =>{
    try {
        await nama_obat.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Todo Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deletenama_obat = async(req, res) =>{
    try {
        await nama_obat.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Todo Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
 