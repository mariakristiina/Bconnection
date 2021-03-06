const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/signup", (req, res) => {
  console.log("------",req.body);
  const { username, password, age, siteLanguage} = req.body
  if (!username) {
    return res.status(400).json({ message: "Please enter a Username" });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: "Password is too short" })
  }

  User.findOne({ username: username })
    .then(found => {
      if (found) {
        return res.status(400).json({ message: "Username is already taken" });
      }
      return bcrypt
        .genSalt()
        .then(salt => {
          return bcrypt.hash(password, salt);
        })
        .then(hash => {
          console.log(req.body);
          return User.create({ 
            username, 
            password: hash,
            siteLanguage,
            age
          });
        })
        .then(newUser => {
          req.login(newUser, err => {
            if (err) res.status(500).json(err);
            else res.json(newUser);
          });
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(500).json({ message: "Error while authenticating" });
    }
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    req.login(user, err => {
      if (err) res.status(500).json(err);
      res.json(user);
    })
  })(req, res, next);
});

router.delete("/logout", (req, res) => {
  req.logout();
  res.json({ message: "Successful logout" });
});

router.get("/loggedin", (req, res) => {
  res.json(req.user);
})

module.exports = router;