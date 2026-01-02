import { Router, type Request, type Response} from 'express';

const router = Router();

interface Book {
    id: number;
    title: string;
    author: string;
}

const books: Book[] = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

// Obtener todos los libros
router.get("/books", (req: Request, res: Response) => {
    res.json(books);
});

export default router;