import dotenv from "dotenv";
import express from "express";
import mustahce from "mustache-express";
import path from "path";
import mainRoutes from "./routes";

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustahce());

server.use(express.static(path.join(__dirname, '../public')))
server.use(mainRoutes);
server.use((req, res) => {
  res.send('Página nao encontrada!');
})

server.listen(process.env.PORT);