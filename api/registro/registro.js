require('module-alias/register')
//libs

import {
	ReasonPhrases,
	StatusCodes,
} from 'http-status-codes';

//Sentry es una plataforma que nos permite monitorear la actividad registrada en nuestros endpoint
let Sentry = require('@logs/sentry');
//joi es una libreria que contienen una serie de funciones validadoras de datos como el largo un texto o validaciones de email, etc. Basados en un esquema de validación customizado
let joi = require('joi');

module.exports = async function handler(req,res){

    //creamos el esquema de validacion para los campos
    const schema = joi.object({
        email: joi.string().email().required(),
        alias: joi.string().required()
    });

    try {
        let validate = await schema.validate(req.body);  
        if (validate.hasOwnProperty('error')) {
            res.status(StatusCodes.BAD_REQUEST).json({error: validate.error.details[0].message});
        }else{
            res.json({data:req.body});
        }
       
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({error: ReasonPhrases.BAD_REQUEST});
    }
    
    
}