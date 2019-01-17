const express = require('express')
const cors = require('cors')
const app = express()

const students = [
  {
    name: 'Claire Beauchamp',
    age: '27'
  },
  {
    name: 'James Fraser',
    age: '25'
  },
  {
    name: 'Frank Randall',
    age: '31'
  },
  {
    name: 'Janet Fraser',
    age: '26'
  }

]

app.use(cors())

app.get('/api/v1/students', function (req, res) {
  res.send(students)
})

app.listen(3000)