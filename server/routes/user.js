
const db = require('../db');

// @ GET A SPECIFIC USER
app.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, res) => {
    if(err){
      return next(err);
    }
    res.send(res.rows[0]);
  })
})

// @ GET ALL USERS
app.get('/', (req, res, next) => {
  db.query('SELECT * FROM users ORDER BY username DESC', (err, res) => {
    if(err) {
      return next(err);
    }
    res.send(res.rows[0]);
  });
})