import express from 'express';
import GetUserHandler from '../http/get-user-handler'

const router = express.Router();

const getUserHandler = async (req, res) => {
    const id = req.query;
    const handler = new GetUserHandler();
    res.send(await handler.get(id));
}

const userRouter = () => {
    router.route('/')
        .get(getUserHandler)

    return router
}

export default {
    userRouter
}