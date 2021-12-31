import express from 'express'
import { TeamEnt } from '../entity/team-entity'
import { ForceService } from '../services/force-service'
import { TeamService } from '../services/team-service'

const router = express.Router()
const teamservice = new TeamService()
const heroservice = new ForceService()

router.post('/', async (req, res) => {
    const { name } = req.body
    const team = new TeamEnt();
    team.name = name;
    await teamservice.insert(team)
    return res.json(team);
})

router.put('/:teamId/new-force/:forceId', async (req, res) => {
    const { teamId, forceId } = req.params;

    const team = await teamservice.find(parseInt(teamId))
    if (!team) {
        res.status(404).send("Team is not found :(")
    }

    const force = await heroservice.find(parseInt(forceId))
    if (!force) {
        res.status(404).send("Force is not found :(")
    }

    const updatedTeam = await teamservice.addForce(team, force);
    return res.json(updatedTeam);
})

export {
    router as TeamController
}