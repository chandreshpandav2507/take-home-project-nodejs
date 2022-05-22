const { query }  = require('./query');

const createOperators = async () => {
    await query( 
        `
            CREATE TABLE IF NOT EXISTS operators (
                id INTEGER PRIMARY KEY NOT NULL
                , "firstName" TEXT
                , "lastName" TEXT NOT NULL
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
            );
        `
    );
}

const createBusiness = async () => {
    await query(
        `
            CREATE TABLE IF NOT EXISTS business (
                id INTEGER PRIMARY KEY NOT NULL
                , "businessName" VARCHAR(25)
                , "businessType" VARCHAR (15)
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
            );
        `
    );
}

const createOps = async () => {
    await query(
        `
            CREATE TABLE IF NOT EXISTS ops (
                id INTEGER PRIMARY KEY NOT NULL
                , "operatorId" INT
                , "businessId" INT
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
            );
        `
    );
}

const seed = async () => {
    console.log( 'Seeding...' );

    await createOperators();

    await createBusiness();

    await createOps();

    console.log( 'Seeding Completed.' );
}

module.exports = {
    seed
}