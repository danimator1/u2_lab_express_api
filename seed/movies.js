const db = require('../db')
const { Movie } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        { title: 'Batman Begins', runtime: '2h 56m', rating: 10, year_released: 2005, description: 'After witnessing his parents death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he must stop a secret society that intends to destroy the city.' },
        { title: 'Teenage Mutant Ninja Turtles: Mutant Mayhem', runtime: '2h 56m', rating: 7, year_released: 2023, description: 'The Turtle brothers work to earn the love of New York City while facing down an army of mutants.' },
        { title: 'Spider-Man: Into the Spider-Verse', runtime: '1h 56m', rating: 10, year_released: 2018, description: 'Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.' },
        { title: 'Beetlejuice', runtime: '1h 32m', rating: 8, year_released: 1988, description: 'The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.' },
        { title: 'The Mask', runtime: '1h 41m', rating: 8, year_released: 1994, description: 'Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.' }
    ]

    await Movie.insertMany(movies)
    console.log("Created some movies!")
}
const run = async () => {
    await main()
    db.close()
}

run()