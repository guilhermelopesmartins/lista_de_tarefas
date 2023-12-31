const express = require("express");
const app = express();
const noteController = require("./controller/noteController");
const sectionController = require("./controller/sectionController");
const boardController = require("./controller/boardController");
const columnController = require("./controller/columnController");
const userController = require("./controller/userController");
const tagController = require("./controller/tagController");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const cors = require("cors"); 

//MIDDLEWARE
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,OPTIONS');
    next();
  })
app.use(express.json())
app.use(cors())

//NOTES ROUTES
app.post("/notes", noteController.createNote);

app.get("/notes", noteController.getAllNotes);

app.get("/note/:id", noteController.getById);

app.get("/notes/:id", noteController.getFromSection);

app.put("/notes", noteController.updateNote);

app.delete("/note/:id", noteController.deleteNote);

app.get("/notes/title/:title", noteController.getByTitle);

//SECTION ROUTES
app.get('/sections', sectionController.getAllSections);

app.post('/sections', sectionController.createSection);

app.get('/sections/:id', sectionController.getFromUser);

app.get('/section/:id', sectionController.getById);

app.put('/sections', sectionController.updateSection);

app.delete('/sections/:id', sectionController.deleteSection);

//BOARDS ROUTES
app.get('/boards', boardController.getAllBoards);

app.post('/boards', boardController.createBoard);

app.get('/boards/:id', boardController.getFromUser);

app.put('/boards', boardController.updateBoard);

app.delete('/boards/:id', boardController.deleteBoard);

//COLUMNS ROUTES
app.get('/columns', columnController.getAllColumns);

app.post('/columns', columnController.createColumn);

app.get('/columns/:id', columnController.getFromBoard);

app.put('/columns', columnController.updateColumn);

app.delete('/columns/:id', columnController.deleteColumn);

//USER ROUTES
app.get('/users', userController.getAllUsers);

app.post('/users', userController.createUser);

app.post('/users/login', userController.login);

app.get('/users/:id', userController.getById);

//app.put('/users', userController.updateuser);

app.delete('/users/:id', userController.deleteUser);

app.get('/tags', tagController.getAllTags);

app.get('/tags/:id', tagController.getById);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//PORT
app.listen(8989, () => {
    console.log("Server is running on port 8989")
})