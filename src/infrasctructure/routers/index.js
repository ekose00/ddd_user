import express from 'express';
import GetUserHandler from '../http/get-user-handler'
import InsertUserHandler from '../http/insert-user-handler'
import DeleteUserHandler from '../http/delete-user-handler'
import AlterUserHandler from '../http/alter-user-handler'


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

const deleteUserHandler = async (req,res) => {
    const id = req.query;
    const handler = new DeleteUserHandler();
    res.send(await handler.delete(id))
}

const alterUserHandler = async (req,res) => {
    const id = req.query;
    const handler = new AlterUserHandler();
    res.send(await handler.alter(id,req.body))
}

const userRouter = () => {
    router.route('/')
        .get(getUserHandler)
        .post(insertUserHandler)
        .delete(deleteUserHandler)
        .put(alterUserHandler)

    return router
}

export default {
    userRouter
}