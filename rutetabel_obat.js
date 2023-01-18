import express from "express";
import {
    getnama_obat, 
    getnama_obat,
    createnama_obat,
    updatenama_obat,
    deletenama_obat,
} from "../controllers/nama_obatController.js";
 
const router = express.Router();
 
router.get('/', getnama_obat);
router.get('/nama_obat/:id', getnama_obatById);
router.post('/nama_obat', createnama_obat);
router.patch('/nama_obat/:id', updatenama_obat);
router.delete('/nama_obat/:id', deletenama_obat);
 
export default router;