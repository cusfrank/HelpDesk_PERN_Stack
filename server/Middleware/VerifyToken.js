const jwt = require("jsonwebtoken")
const cookie = require("cookie")

module.exports = (req, res, next) => {
  const cookies = cookie.parse(req.headers.cookie || "");
  const token = cookies["auth-token"] || req.header("auth-token") || "";
  if (!token) return res.redirect("/")

  try {
    const isVerified = jwt.verify(token, process.env.TOKEN_SECRET);
    res.locals.user = isVerified;
    next();
  } catch (err) {
    console.log(err);
    res.direct("/");
  }
}