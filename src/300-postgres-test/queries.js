const locus = require('locus');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'docker',
  port: 5432,
});


const getUsers = (req, res) => {
  var getUsersSQL = 'SELECT * FROM users ORDER BY id ASC';

  pool.query(getUsersSQL, (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  })
}

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  var getUsersByIdSQL = 'SELECT * FROM users WHERE id = $1';

  pool.query(getUsersByIdSQL, [id], (error, results) => {
    if (error) throw error;

    res.status(200).json(results.rows);
  });
}

const createUser = (req, res) => {
  const { name, email } = req.body;
  var createUserSQL = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
  
  pool.query(createUserSQL, [name, email], (error, results) => {
    if (error) throw error;

    res.status(201).send(`User added with ID: ${results.rows[0].id}`);
    // console.log(results.rows[0]);
  });
}

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  var updateUserSQL = 'UPDATE users SET name = $1, email = $2 WHERE id = $3';

  pool.query(updateUserSQL, [name, email, id], (error, results) => {
    if (error) throw error;

    res.status(200).send(`User modified with ID: ${id}`);
  });
}

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  var deleteUserSQL = 'DELETE FROM users WHERE id = $1';

  pool.query(deleteUserSQL, [id], (error, results) => {
    if (error) throw error;

    res.status(200).send(`User deleted with ID: ${id}`);
  });
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}