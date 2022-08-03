import {createPool} from'mysql2/promise';

export async function connect(){
        const connection = await createPool({
            user: "root",
            host: "containers-us-west-84.railway.app",
            password: "yGp0Gcv0tedsnr4JFHK8",
            port:7228,
            database: "railway",
            connectionLimit:10
            });

    return connection;
    
}