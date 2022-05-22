const express = require('express');
const { getLastInsertId } = require('../../db');
const { getBusiness, createBusiness } = require('./business.service');

const businessRouter = express.Router();

businessRouter
    .get( 
        '/:businessId'
        , async ( req, res ) => {
            const businessId = req.params.businessId;
            const business = await getBusiness( businessId );

            return res
                .status( 200 )
                .json( business )
        }
    )
    .post( 
        '/',
        async ( req, res ) => {
            const created = await createBusiness( {
                businessName: req.body.businessName,
                businessType: req.body.businessType
            } );

            const businessId = await getLastInsertId();
            const createdBusiness = await getBusiness( businessId );

            return res
                .status( 201 )
                .json( createdBusiness )
        }
    );

module.exports = {
    businessRouter: businessRouter
}