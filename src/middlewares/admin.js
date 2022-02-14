let admins = ['Ada','Greta','Vim','Tim'];

module.exports = {
    admin: (req,res,next) => {
      let user = req.query.user;
      if(user) {
          admins.forEach(admin => {
              if (user == admin) {
                  next();
              }
          });
      } else {
          res.send('No tienes los privilegios para acceder a esta seccion')
      }

       /* user && admins.includes(user) ? next() : res.send('No tienes privilegios para ingresar');  */
}

}