import { Pool } from 'pg'
import { Request, Response } from 'express'
 
 
console.log(`Create pool with defaults: server='MyExpress Server'`)
const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  user: 'postgres',
  password: 'mysecretpassword',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 10000,
})
export const getEmployees = async (Request: Request, response: Response) => {
    console.log('getEmployees')
    try {
          const employees = await pool.query(
              "select * from employee;"
          );
          console.log("Employees = ",employees.rows);
          response.json(employees.rows);
      //response.status(404).json({ message: 'TODO: getEmployees' })
    } catch (error) {
      console.log('Error thrown in getEmployees: ', (error as Error).message)
      response.status(500).json({ message: 'There was an error' })
    }
  }

  export const deleteEmployee = async (Request: Request, response: Response) => {
    console.log('Employee Deleted')
    try {
          const employees = await pool.query(
              "delete from employee where empno ='1235';"
          );
          console.log("Employees = ",employees.rows);
          response.json(employees.rows);
      //response.status(404).json({ message: 'TODO: getEmployees' })
    } catch (error) {
      console.log('Error thrown in getEmployees: ', (error as Error).message)
      response.status(500).json({ message: 'There was an error' })
    }
  }