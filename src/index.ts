import express, {Request, Response} from "express";
import { Server } from "http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req: Request, res: Response) => {
  res.send("Hi, Welcome to my nodejs app!");
});

const port = 3000;

const server: Server = app.listen({ port }, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
