const User = require('../models/User.js')

async function viewUsers() {
  const users = await User.findAll();
  users.forEach(user => {
    console.log(user.dataValues);  // This will log only the user's data
  });
}

viewUsers();
