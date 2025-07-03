const pool = require('./dbconfig'); // Path to your database config

// Signup route example
async function signup(req, res) {
  try {
    const { username, password } = req.body;
    await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
    res.status(201).send('User created');
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Database error');
  }
}

// Login route example
async function login(req, res) {
  try {
    const { username, password } = req.body;
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
    if (rows.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Database error');
  }
}   