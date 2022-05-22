const { query } = require("../../db/query")

const getBusiness = async ( businessId ) => {
    const text = `
        SELECT id, 
               "businessName",
               "businessType", 
               "createdAt"
        FROM business
        WHERE id = $1;
    `;
    const [ business ] = await query( text, [ businessId ] );
    console.log('business---', business);
    return business;
};

const createBusiness = async ( { businessName, businessType } ) => {
    const text = `
        INSERT INTO business
        ( "businessName", "businessType" )
        VALUES ( $1, $2 )
    `;
    await query( text, [ businessName, businessType ] );
};

module.exports = {
    getBusiness,
    createBusiness
}