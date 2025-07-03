const express = require('express');
const pool = require('./controller/dbconfig.js'); 
const app =express();
const port = 3005;

app.use(express.json())

app.get('/',  async (req,res) => {
    // res.send("yes it is working ")
    const [result] = await pool.query(`select * from app_db.users;`)
    console.log(result);
    // const respone = await result.json();

    // console.log(respone);

    res.json({
      data : result,
      msg : "Hello, Yes it's working!"
    })
})

app.post('/signUp',async (req, res) => {
    console.log(req.body);
    try {
      const { username, password } = req.body;
      await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
      res.status(201).send('User created');
    } catch (err) {
      console.error('Database error:', err);
      res.status(500).send('Database error');
    }
  })

  app.post('/login',async (req, res) => {
    console.log(req.body);
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
  })


  app.listen(port, () => {
    console.log("app is running http://localhost:3005");
  })
