const express = require('express');
const { getLastInsertId } = require('../../db');
const { getOps, createOps } = require('./ops.service');

const opsRouter = express.Router();

opsRouter
    .get( 
        '/:opsId'
        , async ( req, res ) => {
            const opsId = req.params.opsId;
            const business = await getOps( opsId );

            return res
                .status( 200 )
                .json( business )
        }
    )
    .post( 
        '/',
        async ( req, res ) => {
            await createOps( {
                operatorId: req.body.operatorId,
                businessId: req.body.businessId
            } );

            const opsId = await getLastInsertId();
            const createdOp = await getOps( opsId );

            return res
                .status( 201 )
                .json( createdOp )
        }
    );

module.exports = {
    opsRouter: opsRouter
}