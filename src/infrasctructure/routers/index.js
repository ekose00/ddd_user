import express from 'express';
import GetUserHandler from '../http/get-user-handler'
import InsertUserHandler from '../http/insert-user-handler'

const router = express.Router();

const getUserHandler = async (req, res) => {
    const id = req.query;
    const handler = new GetUserHandler();
    res.send(await handler.get(id));
}

const insertUserHandler = async (req, res) => {
    const handler = new InsertUserHandler();
    res.send(await handler.post(req.body));
}

const userRouter = () => {
    router.route('/')
        .get(getUserHandler)
        .post(insertUserHandler)

    return router
}

export default {
    userRouter
}