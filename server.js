const express = require('express');
const db = require('./db');
const movieController = require('./controllers/movieController')
const actorController = require('./controllers/actorController')
const reviewController = require('./controllers/reviewController')
const bodyParser = require('body-parser');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())



db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))



app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/movies', movieController.getAllMovies)
app.get('/movies/:id', movieController.getMovieById)


app.get('/actors', actorController.getAllActors)
app.get('/actors/:id', actorController.getActorById);

app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getReviewById);



app.post('/movies', movieController.createMovie)
app.put('/movies/:id', movieController.updateMovie)
app.delete('/movies/:id', movieController.deleteMovie)


app.post('/actors', actorController.createActor)
app.put('/actors/:id', actorController.updateActor)
app.delete('/actors/:id', actorController.deleteActor)


app.post('/reviews', reviewController.createReview)
app.put('/reviews/:id', reviewController.updateReview)
app.delete('/reviews/:id', reviewController.deleteReview)