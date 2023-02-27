const { verify } = require("jsonwebtoken");


module.exports = (req, res, next) => {
  const token = req.get("x-auth-token");
  if (!token || token === "") {
    req.isAuth = false;
    return res.status(401).send("Authorization failed..");
  } else {
    let decoded;

    try {
      decoded = verify(token, process.env.JWT_SECRET);
    } catch (error) {
      req.isAuth = false;
      return res.status(401).send("Authorization failed..");
    }

    if (!decoded) {
      req.isAuth = false;
      return res.status(401).send("Authorization failed..");
    }

    if (decoded?.admin?.role === 'admin') {
        req.isAuth = true;
        req.admin = decoded.admin;
        return next();

    } 
    if (decoded?.user?.role === 'user') {
        req.isAuth = true;
    req.user = decoded.user;
    req.userData = decoded;
    return next();

      }
    

   
  }
};
