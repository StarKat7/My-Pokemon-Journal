const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;


module.exports = {
  signup,
  login
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token }); // shorthand for the below
    // res.json({ token: token })
  } catch (err) {
    // THIS is an example of how to handle validation errors from Mongoose
    if (err.name === "MongoServerError" && err.code === 11000) {
      console.log(err.message, "err.message");
      res
        .status(423)
        .json({
          errorMessage: err,
          err: `${identifyKeyInMongooseValidationError(
            err.message
          )} Already taken!`,
        });
    } else {
      res.status(500).json({
        err: err,
        message: "Internal Server Error, Please try again",
      });
    }
  }
}





async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user, ' this user in login')
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    // had to update the password from req.body.pw, to req.body password
    user.comparePassword(req.body.password, (err, isMatch) => {

      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(401).json({ err: 'error message' });
  }
}


/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: '24h' }
  );
}

function identifyKeyInMongooseValidationError(err) {
  let key = err.split("dup key: {")[1].trim();
  key = key.slice(0, key.indexOf(":"));
  return key.replace(/^./, (str) => str.toUpperCase());
}
