require('module-alias/register')
//libs

import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';
// let axios = require('axios');
//files
//let mock = require('@mock/alias');
let axiosPlaceHolder = require('../mock/remote/axios_placeholder');
let Sentry = require('@logs/sentry');

module.exports = async function handler(req,res){
    //el objeto req puede contener informacion en req.body o req.query dependiendo que tipo de parametro sea enviados al endpint
    if (req.method =='GET') {
        try {
            let url = '/posts';
            let {data} = await axiosPlaceHolder(url);
            Sentry.captureMessage('Request Ok');
            res.status(StatusCodes.CREATED).json({
                data: data
            })
        } catch (error) {
            Sentry.captureException(error);
            res.status(StatusCodes.BAD_REQUEST).json({
                error: ReasonPhrases.BAD_REQUEST
            })
        }
        
    } else{
        Sentry.captureMessage(ReasonPhrases.METHOD_NOT_ALLOWED);
        res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
            error: ReasonPhrases.METHOD_NOT_ALLOWED
        })
    }
    
}