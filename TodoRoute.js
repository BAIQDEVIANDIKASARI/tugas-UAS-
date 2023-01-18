import express from "express";
import {
    getTodos, 
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} from "../controllers/TodoController.js";
 
const router = express.Router();
 
router.get('/tabel_distributor', getTodos);
router.get('/tabel_distributor/:id', getTodoById);
router.post('/tabel_distributor', createTodo);
router.patch('/tabel_distributor/:id', updateTodo);
router.delete('/tabel_distributor/:id', deleteTodo);
 
export default router;