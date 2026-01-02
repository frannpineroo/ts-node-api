import express, { type Request, type Response } from 'express';
import bookRoutes from './routes/bookRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", bookRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Bienvenido a Node.js + Typescript API!");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
