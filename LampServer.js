const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.use(express.json())

let state = {
	"A": false,
	"B": false,
};

app.get('/', (req, res) => {
	res.send(state)
})

app.post('/client', (req, res) => {
	let data = req.body;
	state[data.id] = data.state;
	res.sendStatus(200)
	return;
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})