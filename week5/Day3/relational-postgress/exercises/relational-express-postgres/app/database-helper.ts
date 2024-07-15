import { Pool } from 'pg'
import { Request, Response } from 'express'

const dbServer = 'my-postgres';
const dbPassword = "mysecretpassword";

console.log(`Create pool with defaults: server='${dbServer}'`)
const pool = new Pool({
  host: dbServer,
  database: 'postgres',
  user: 'postgres',
  password: dbPassword,
  port: 5432,
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 10000,
})

export const getTeachers = async (Request: Request, response: Response) => {
  console.log('getTeachers')

  try {
    // todo
    const teachers = await pool.query(
      "select * from teacher;"
    )
   // response.status(404).json({ message: 'TODO: getTeachers' })
    //response.status(404).json({ message: teachers.rows });
    response.json(teachers.rows);
  } catch (error) {
    console.log('Error thrown in getTeachers: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const getTeacherById = async (_: Request, response: Response) => {
  console.log('getTeacherById')
  const teacher_id = parseInt(Request.params.id);
  console.log(`getTeacherById: teacher_id=${teacher_id}`);

  try {
    // todo
    const results = await pool.query(
      "SELECT * FROM teacher WHERE teacher_id = $1;",
      [teacher_id]
    );
    response.status(404).json({ message: 'TODO: getTeacherById' })
  } catch (error) {
    console.log('Error thrown in getTeacherById: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const createTeacher = async (request: Request, response: Response) => {
  console.log('createTeacher: body=', request.body)

  try {
    // todo
    response.status(404).json({ message: 'TODO: createTeacher' })
  } catch (error) {
    console.log('Error thrown in createTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const updateTeacher = async (request: Request, response: Response) => {
 const teacher_id = parseInt(request.params.id);
 const { first_name, surname } = request.body;
 console.log(`updateTeacher: teacher_id=${teacher_id}`);

 try {
   const results = await pool.query(
     "UPDATE teacher SET first_name = $1, surname = $2 WHERE teacher_id = $3;",
     [first_name, surname, teacher_id]
   );
   const message = `updateTeacher: modified with ID: ${teacher_id}`;
   console.log(message);
   response.status(200).send(message);
 } catch (error) {
   console.log("Error thrown in updateTeacher: ", (error as Error).message);
   response.status(500).json({ message: "There was an error" });
 }
}

export const deleteTeacher = async (_: Request, response: Response) => {
  console.log('deleteTeacher')
  const teacher_id = parseInt(request.params.id);
  console.log(`deleteTeacher: teacher_id=${teacher_id}`);

  try {
    const results = await pool.query(
      "DELETE FROM teacher WHERE teacher_id = $1;",
      [teacher_id]
    );
    const message = `deleteTeacher: Teacher deleted with ID: ${teacher_id}`;
    console.log(message);
  } catch (error) {
    console.log('Error thrown in deleteTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}
