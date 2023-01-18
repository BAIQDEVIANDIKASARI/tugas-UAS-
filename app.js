import express from "express";
import cors from "cors";
import rutenama_obat from "./routes/rutenama_obat.js";
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(rutenama_obat);
 
app.listen(3008, ()=> console.log('Server up and running...'));