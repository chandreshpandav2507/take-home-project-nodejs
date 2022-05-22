const { query } = require( './query' );
const { seed } = require( './seed' );
const { getLastInsertId } = require( './lastInsertId' );

module.exports = {
    query
    , seed
    , getLastInsertId
}