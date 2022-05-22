const { query } = require("../../db/query")

const getOperator = async ( operatorId ) => {
    const text = `
        SELECT id, 
               "firstName",
               "lastName", 
               "createdAt"
        FROM operators
        WHERE id = $1;
    `;
    const [ operator ] = await query( text, [ operatorId ] );
    console.log('operator---', operator);
    return operator;
};

const createOperator = async ( { firstName, lastName } ) => {
    const text = `
        INSERT INTO operators
        ( "firstName", "lastName" )
        VALUES ( $1, $2 )
    `;
    await query( text, [ firstName, lastName ] );
};

module.exports = {
    getOperator
    , createOperator
}