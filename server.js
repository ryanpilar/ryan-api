const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8000

const theData = {
    'ryan' : {
        'race': 'mutt',
        'hight': 6,
        'rad': true
    },
    'mj' : {
        'race': 'ukranian',
        'hight': 5,
        'rad': true
    },
    'unknown' : {
        'race': 'unknown',
        'hight': 0,
        'rad': false
    },
}
app.use(bodyParser.urlencoded( {encoded: true}))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api', (req, res) => {
    res.json(theData)
})
app.get('/api/:coolPerson', (req, res) => {
    const personName = req.params.coolPerson.toLocaleLowerCase()
    console.log('personNmae', personName)

    if( theData[personName] ) {
        res.json(theData[personName]).end()
    }
    else {
        res.json(theData['unknown']).end()
    }

    
})
app.get('/main.js', (req, res) => {
    console.log('got this far')
    res.sendFile(__dirname + '/main.js')
})
app.listen(process.env.PORT || PORT, function(){
    console.log(`running on port ${PORT}`)
})