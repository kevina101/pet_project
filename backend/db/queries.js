var db = require('./index');


const getShelters = (req,res,next) => {
  db
  .any('SELECT * FROM shelters')
  .then( (data) => {
    res.status(200).json({
      status:'cool',
      data:data
    })
  })
  .catch( error => {
    res.status(500).send('error getting shelters',error)
  })
  
}



module.exports = {
 getShelters
}