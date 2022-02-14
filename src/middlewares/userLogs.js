const fs = require('fs');
const path = require('path');


const logPath = path.join(__dirname, '../logs/userLogs.txt'); 
function userLogs(req,res,next){
fs.appendFileSync(logPath, 'El Usuario ingreso en: ' + req.url + '\n');
next();
}


module.exports = userLogs;