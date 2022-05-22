const { Database } = require('sqlite3');

const db = new Database('./store.db', ( error ) => {
    if ( error ) {
        console.error( 'Could not connect to SQlite DB', error );
        return;
    }

    console.log( 'Connected to SQlite DB' );
});

const query = async ( text, values = [] ) => {
    console.log('db----', db);
    return new Promise( ( resolve, reject ) => {
        db.all( 
            text
            , values
            , ( error, rows ) => {
                if ( error ) return reject( error );
                return resolve( rows );
            }
        )
    } );
}

module.exports = {
    query
}