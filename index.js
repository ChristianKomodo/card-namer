const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const cards = [
	{ id: 1, name: 'Highland Goblin' },
	{ id: 2, name: 'Forest Elf' },
	{ id: 3, name: 'Fire Elemental' }
];

app.get('/', (req, res) => {
	res.send('Welcome to Card Namer Deluxe');
});

// GET cards
app.get('/api/cards', (req, res) => {
	res.send(cards);
});

// GET a particular card
app.get('/api/cards/:id', (req, res) => {
	const card = cards.find(c => c.id === parseInt(req.params.id));
	if (!card) return res.status(404).send('No card found with this ID');
	res.send(card);
});

// PUT card
app.put('/api/cards/:id', (req, res) => {
	const card = cards.find(c => c.id === parseInt(req.params.id));
	if (!card) return res.status(404).send('No card found with this ID');
	if (!req.body.name) return res.status(404).send('No card name in request body');

	const { error } = validateCard(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	card.name = req.body.name;
	res.send(card);
});

// Validation
function validateCard(card) {
	const schema = {
		name: Joi.string().min(3).required()
	};
	return Joi.validate(card, schema);
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));