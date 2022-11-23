import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import knex from 'knex'



export class connectionDataBase {

    /* protected static openDb = () => {
        return open({
            filename: './database.db',
            driver: sqlite3.Database
    } */

    protected static connection = knex({
        client: 'sqlite3',
        connection: {
            filename: './database.db'
        },
        useNullAsDefault: true
    })
}



/*
export function  openDb () {
    return open({
        filename: './database.db',
        driver: sqlite3.Database
    })
} 


openDb()
*/


