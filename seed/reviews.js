const db = require('../db')
const { Movie, Review } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const batmanBegins = await Movie.find({ name: 'Batman Begins' })
    const teenageMutantNinjaTurtlesMutantMayhem = await Movie.find({ name: 'Teenage Mutant Ninja Turtles: Mutant Mayhem' })
    const spiderManIntotheSpiderVerse = await Movie.find({ name: 'Spider-Man: Into the Spider-Verse' })
    const beetlejuice = await Movie.find({ name: 'Beetlejuice' })
    const theMask = await Movie.find({ name: 'The Mask' })

    const reviews = [
        {
            score: 10,
            comment: 'Batman Begins is a gripping origin story that revitalizes the iconic superhero with a darker, more realistic tone and compelling character development.',
            movie: batmanBegins[0]
        },
       {
            score: 7,
            comment: ' Teenage Mutant Ninja Turtles: Mutant Mayhem delivers a fresh, energetic take on the beloved heroes with vibrant animation and a fun, action-packed storyline.',
            movie: teenageMutantNinjaTurtlesMutantMayhem[0]
        },
        {
            score: 10,
            comment: ' Spider-Man: Into the Spider-Verse is a visually stunning and innovative animated film that redefines the superhero genre with its captivating story and diverse characters.',
            movie: spiderManIntotheSpiderVerse[0]
        },
        {
            score: 8,
            comment: ' Beetlejuice is a quirky and darkly comedic film that captivates audiences with its unique blend of supernatural elements, eccentric characters, and Tim Burtons signature visual style.',
            movie: beetlejuice[0]
        },
        {
            score: 8,
            comment: ' The Mask is a wild and zany ride, blending comedy, action, and fantasy in a vibrant and hilarious adventure that showcases Jim Carreys comedic genius.',
            movie: theMask[0]
        }
    
    ]

    await Review.insertMany(reviews)
    console.log("Created some reviews!")
}
const run = async () => {
    await main()
    db.close()
}

run()