const { query } = require( './query' );

const getLastInsertId = async () => {
    const [ lastInsert ] = await query( 'SELECT LAST_INSERT_ROWID() as id;' );
    return lastInsert.id;
};

module.exports = {
    getLastInsertId
}