import express from 'express'
import bodyParser from 'body-parser'
import router from './infrasctructure/routers'

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use('/api/v1/user', router.userRouter());

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})