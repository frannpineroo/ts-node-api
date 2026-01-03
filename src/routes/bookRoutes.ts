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

// Obtener un libro por ID
router.get("/books/:id", (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: "Libro no encontrado" });
    }
});

// Agregar un nuevo libro
router.post("/books", (req: Request, res: Response) => {
    const newBook: Book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Actualizar un libro existente
router.put("/books/:id", (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id, 10);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex !== -1) {
        books[bookIndex] = {
            id: bookId,
            title: req.body.title,
            author: req.body.author
        };
        res.json(books[bookIndex]);
    } else {
        res.status(404).json({ message: "Libro no encontrado" });
    }
});

// Eliminar un libro
router.delete("/books/:id", (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id, 10);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Libro no encontrado" });
    }
});

export default router;