import { UserEnt } from "../entity/user-entity";

export class UserService {
    public async insert(data: UserEnt) {
        const user = UserEnt.create(data)
        await user.save();
        return user
    }

    public async find(id: number): Promise<UserEnt> {
        const user = await UserEnt.findOne(id);
        return user;
    }
}