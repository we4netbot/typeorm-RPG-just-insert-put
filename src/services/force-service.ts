import { ForceEnt } from "../entity/force-entity";

export class ForceService {
    public async insert(data: ForceEnt) {
        const force = ForceEnt.create(data)
        await force.save();
        return force
    }

    public async find(id: number): Promise<ForceEnt> {
        const force = await ForceEnt.findOne(id);
        return force;
    }
}