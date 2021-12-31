import express from 'express'
import { UserEnt } from '../entity/user-entity'
import { UserService } from '../services/user-service'
const router = express.Router()
const userservice = new UserService();

router.post('/', async (req, res) => {
    const { first_name, last_name } = req.body;
    const user = new UserEnt();
    user.first_name = first_name;
    user.last_name = last_name;
    await userservice.insert(user)
    return res.json(user);
})

export {
    router as UserController
}