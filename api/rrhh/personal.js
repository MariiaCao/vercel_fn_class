

module.exports = async function handler(req,res){
    //el objeto req puede contener informacion en req.body o req.query dependiendo que tipo de parametro sea enviados al endpint
    if (req.method =='GET') {
       
        res.status(200).json({
            data: 'serverless personal'
        })
        
    } 
    
}