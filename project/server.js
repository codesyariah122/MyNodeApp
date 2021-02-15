const express = require('express')

const app = express()

const TaskListController =require('controllers/TaskListController.js')
const TaskCreateController =require('controllers/TaskCreateController.js')
const TaskDeleteController =require('controllers/TaskDeleteController.js')
const TaskUpdateController =require('controllers/TaskUpdateController.js')

// REST: HTTP verbs
app.get('/', TaskListController)

app.post('/', TaskCreateController)

app.delete('/:id', TaskDeleteController)

app.put('/:id', TaskUpdateController)

// app.get('/', (req, res) => res.send('Hello Node'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))