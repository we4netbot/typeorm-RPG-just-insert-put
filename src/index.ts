import { createConnection } from 'typeorm';
import { ForceEnt } from './entity/force-entity'
import { TeamEnt } from './entity/team-entity'
import { WarEnt } from './entity/war-entity';
import { UserEnt } from './entity/user-entity';

import express from 'express';
import { ForceController } from './routers/force-controller';
import { TeamController } from './routers/team-controller';
import { UserController } from './routers/user-controller';

const app = express()
const port = process.env.PORT || 3001;
app.use(express.json())
app.use('/api/force', ForceController)
app.use('/api/team', TeamController)
app.use('/api/user', UserController)

// var DB_HOST = process.env.DB_HOST;
// var DB_USER = process.env.DB_USER;
// var DB_PASS = process.env.DB_PASS;
// var DB_NAME = process.env.DB_NAME;
async function main() {
    try {
        await createConnection({
            type: "postgres",
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '123',
            database: "postgres",
            synchronize: true,
            entities: [ForceEnt, TeamEnt, WarEnt, UserEnt],
            extra: {
                trustServerCertificate: true,
            },
        })
        console.log("Database is CONNECTED!  :)")
        app.listen(port, () => {
            console.log(`Start listening on port ${port}`);
        })
    } catch (e: any) {
        console.error(e)
        console.log("Conection Error!  :(")
    }
}
main();