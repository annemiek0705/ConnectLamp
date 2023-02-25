const express = require('express')
const app = express()
const port = process.env.PORT || 8000
let clientA, clientB;

app.get('/specialState', (req, res) => {
	let response="";
	if(clientA && !clientB) {
		response = "Bfalse";
	}else if(!clientA && clientB){
		response = "Afalse";
	}else if(clientA&&clientB){
		response = "true"
	}
	res.send(response)
})
app.post('/clientstate', (req, res) => {
	let clientstate = req.body;

	if(clientstate.id == "A"){
		if(clientstate.state){
			clientA = true;
		}else{
			clientA = false;
		}
	}else if(clientstate.id =="B"){
		if(clientstate.state){
			clientB = true;
		}else{
			clientB = false;
		}
	}
	res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})