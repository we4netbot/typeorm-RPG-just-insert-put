import express from 'express'
import { ForceEnt } from '../entity/force-entity'
import { ForceService } from '../services/force-service'

const router = express.Router()
const forceservice = new ForceService()

router.post('/', async (req, res) => {
    const { name } = req.body
    const force = new ForceEnt();
    force.name = name;
    await forceservice.insert(force)
    return res.json(force);
})

export {
    router as ForceController
}