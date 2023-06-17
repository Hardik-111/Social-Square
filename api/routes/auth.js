const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

// LOGOUT

// router.post('/logout', (req, res) => {
//   try {
//     // Clear the access token from client-side storage
//     localStorage.removeItem('accessToken');

//     // Send a success response
//     res.status(200).json('Logged out successfully.');
//   } catch (err) {
//     // Send an error response if something went wrong
//     res.status(500).json({ message: err.message });
//   }
// });

//LOGOUT
router.post("/logout", (req, res) => {
  // Add your logout logic here
  // This can include clearing session data, updating user status, etc.
  // For the sake of this example, let's assume we simply send a logout response.
  res.status(200).json("Logged out successfully.");
});

module.exports = router;
