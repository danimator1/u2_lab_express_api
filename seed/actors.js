const db = require('../db')
const { Movie, Actor } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const batmanBegins = await Movie.find({ name: 'Batman Begins' })
    const teenageMutantNinjaTurtlesMutantMayhem = await Movie.find({ name: 'Teenage Mutant Ninja Turtles: Mutant Mayhem' })
    const spiderManIntotheSpiderVerse = await Movie.find({ name: 'Spider-Man: Into the Spider-Verse' })
    const beetlejuice = await Movie.find({ name: 'Beetlejuice' })
    const theMask = await Movie.find({ name: 'The Mask' })
    
    const actors = [
        { name: 'Christian Bale', age: 45, deceased: false, movie_id: batmanBegins[0] },
        { name: 'Shamon Brown Jr.', age: 30, deceased: false, movie_id: teenageMutantNinjaTurtlesMutantMayhem[0] }, 
        { name: 'Shameik Moore', age: 30, deceased: false,  movie_id: spiderManIntotheSpiderVerse[0] }, 
        { name: 'Michael Keaton', age: 60, deceased: false, movie_id: beetlejuice[0] }, 
        { name: 'Jim Carrey', age: 50, deceased: false, movie_id: theMask[0] }

    ]

    await Actor.insertMany(actors)
    console.log("Created some actors!")
}
const run = async () => {
    await main()
    db.close()
}

run()