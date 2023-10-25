import express from 'express';
import userRouter from './routes/users.routes';
import authRouter from './routes/auth.routes';
import db from './config/db.config';
import cors from 'cors';
import { auth } from './middlewares/auth.middleware';


const app = express();
app.use(express.json())
app.use(cors({
    origin: '*'
}))
const PORT = 3001
const API_PATH = '/api'

app.get(`${API_PATH}/health`, (_req, res) => {
    console.log('server is up')
    res.send('Server is up')
})

app.use(`${API_PATH}/users`, auth, userRouter)
app.use(`${API_PATH}/auth`, authRouter)

app.listen(PORT, async () => {
    console.log(`Server running in por ${PORT}`)
    try {
        await db.authenticate()
        console.log(`Db is online`)
    } catch (error) {
        throw new Error('Database failed to connect')
    }
})