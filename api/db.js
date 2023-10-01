import mysql from 'mysql'

export const db =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Vini@123',
  database: 'crud'
})

