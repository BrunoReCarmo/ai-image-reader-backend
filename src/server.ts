import cors from "cors";
import express from "express";
import route from "@routes";
import { ServerKey } from "@middleware";

const app = express();

app.use(express.json());
//P/ Conexão FrontEnd
app.use(cors());
//rotas API
app.use(ServerKey, route);
//Bloco c/ a porta do servidor
const PORT = process.env.PORT || 80;

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });