const {poolUsers, poolPortfolios} = require('./conf')

const db = {
  tb1: "users",
  tb2: "portfolios"
}


const getAllUsers = async() => {
  try{    
    const users = await poolUsers.query(`SELECT * FROM ${db.tb1}`)
    return users.rows
  }catch(err){
    console.error(err.message)
  }
}

const getUsersById = async(id) => {
  try{
    const users = await poolUsers.query(`SELECT * FROM ${db.tb1} WHERE id = $1`, [id])
    return users.rows
  }catch(err){
    console.error(err.message)
  }
}

const createUsers = async(name, email) => {
  try{
    const users = await poolUsers.query(`INSERT INTO ${db.tb1} (name, email) VALUES ($1,$2) `, [name, email])
    return users
  }catch(err){
    console.error(err.message)
  }
}

const updateUsers = async(id, name, email) => {
  try{
    const users = await poolUsers.query(`UPDATE ${db.tb1} SET name = $1, email = $2 WHERE id = $3`, [name, email, id])
    return users
  }catch(err){
    console.error(err.message)
  }
}


const deleteUsers = async(id) => {
  try{
    const users = await poolUsers.query(`DELETE FROM ${db.tb1} WHERE id = $1`, [id])
    return users
  }catch(err){
    console.error(err.message)
  }
}


const getPortfolios = async() => {
  try {
    const Portfolio = await poolPortfolios.query(`SELECT * FROM ${db.tb2}`)
    return Portfolio.rows
  } catch(err) {
    console.error(err.message)
  }
}

module.exports = {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  getPortfolios
}