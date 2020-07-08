const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(express.static('build'))
app.use(cors())
morgan.token('content', (req, res) => {return JSON.stringify(req.body)})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

let persons =  [
    {
      name: "Arto Hellas",
      number: "040-119-0900",
      id: 1
    },
    {
      name: "Ada Lovelace",
      number: "39-44-5323523",
      id: 2
    },
    {
      name: "Dan Abramov",
      number: "12-43-234345",
      id: 3
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    const count = `<p>Phonebook has info for ${persons.length} people</p>`
    const date = new Date();
    const dateStr = `<p>${date.toString()}</p>`
    res.send(count + dateStr)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const pers = persons.find(p => p.id === id)
  if (pers) {
    res.json(pers)
  }
  else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(p => p.id !== id)

  res.status(204).end()
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number is missing'
    })
  }
  else if (persons.find(p => p.name.toLowerCase() === body.name.toLowerCase())) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }

  const pers = {
    name: body.name,
    number: body.number,
    id: getRandomInt(1000)
  }

  persons = persons.concat(pers)
  res.json(pers)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
