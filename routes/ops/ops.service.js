const { query } = require("../../db/query")

const getOps = async ( opsId ) => {
    const text = `
        SELECT id, 
               "operatorId",
               "businessId", 
               "createdAt"
        FROM ops
        WHERE id = $1;
    `;
    const [ ops ] = await query( text, [ opsId ] );
    console.log('ops---', ops);
    return ops;
};

const createOps = async ( { operatorId, businessId } ) => {
    console.log('req.body---', { operatorId, businessId });
    const text = `
        INSERT INTO ops
        ( "operatorId", "businessId" )
        VALUES ( $1, $2 )
    `;
    console.log('query----------', text);
    await query( text, [ operatorId, businessId ] );
};

module.exports = {
    getOps,
    createOps
}