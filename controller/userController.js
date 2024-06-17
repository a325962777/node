const userService = require('../services/userService');

async function createUser(req,res){
try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
} catch (error) {
    res.status(400).json({message:error.message});
}
}

async function getUsers(req,res){
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
module.exports = {
    createUser,
    getUsers
};