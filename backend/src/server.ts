import express from "express";
import routes from "./routes/main";
import path from "path";

const server = express();

// Middlewares
server.use(express.json());

server.use("/subscribe", express.static(path.join(__dirname, "..", "public")));

server.use(routes);

server.use((req, res) => {
    res.status(404).json({ error: "Página não encontrada" });
});

server.listen(process.env.PORT, () => {
    console.log("Servidor rodando em http://localhost:" + process.env.PORT);
});
