const express = require('express')

const path = require('path')

const app = express()

const logger = require('./middleware/logger')

// Init middleware
// app.use(logger);



// set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Members API Router
app.use('/api/members', require('./routes/api/members.js'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server start on port ${PORT}`)
});

