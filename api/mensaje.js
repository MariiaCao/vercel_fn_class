
//libs

import {
	ReasonPhrases,
	StatusCodes,
} from 'http-status-codes';

//files
import axiosPlaceHolder from '../mock/remote/axios_placeholder.js';
import Sentry from '../logs/sentry.js';

module.exports = async function handler(req,res){
  
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