// Bring in Node modules
require('dotenv').config();
const express = require('express');
const path = require('path');
const { spawn } = require('child_process');

// Initialize Express
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use('/static', express.static('public'));

// Routes
app.get('/', (req, res) => res.render('index'));

app.post('/api', (req, res) => {
  const pythonProcess = spawn('python', ['script.py', `${req.body.group}`]);
  pythonProcess.stdout.on('data', function (data) {
    console.log(data.toString());
    res.write(data);
    res.end('end');
  });
});

// Start listening
const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log(`🎩 Serving the magic on port ${PORT}`));
