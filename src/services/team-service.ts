import { ForceEnt } from "../entity/force-entity";
import { TeamEnt } from "../entity/team-entity";

export class TeamService {
    public async insert(data: TeamEnt) {
        const team = TeamEnt.create(data)
        await team.save();
        return team
    }

    public async find(id: number) {
        const team = await TeamEnt.findOne(id);
        return team;
    }

    public async addForce(team: TeamEnt, force: ForceEnt) {
        console.log(team.forces);
        if (team.forces != undefined) {
            console.log("if 1", team.forces);
            team.forces.push(force);
        } else {
            team.forces = [force];
        }
        await team.save();
        return team;
    }
}