const User = require('../models/User');

async function createUser(userData){
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
}

async function getUsers(){
    const users = await User.find().exec();
    return users;
}
module.exports = {
    createUser,
    getUsers
};