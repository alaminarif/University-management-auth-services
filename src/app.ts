import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersServices from './app/modules/users/users.services'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response) => {
  await usersServices.createUser({
    id: '221',
    role: 'studet',
    password: 'llk',
  })
  res.send('app is running')
})
//
export default app
