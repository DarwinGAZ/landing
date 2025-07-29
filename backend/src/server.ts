import express from "express";
import cors from "cors";
import routes from "./routes/main";
import path from "path";

const server = express();

// Middlewares
server.use(express.json());
server.use(cors());

server.use(express.static(path.join(__dirname, "..", "public")));

server.use(routes);

server.use((req, res) => {
    res.status(404).json({ error: "Página não encontrada" });
});

server.listen(4040, () => {
    console.log("Servidor rodando em http://localhost:4040");
});
