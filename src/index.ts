import { app } from './server';
import dotenv from 'dotenv';
import { DatabaseConnection } from "./data-source";

dotenv.config()

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    console.log(`Server is started and listenning on port: ${PORT}`, DatabaseConnection());
})
