const bcrypt = require('bcrypt');
const hashPassword = async (password, saltRounds = 2) => {   //salt round-how much time need to calculate the single bcrypt hash
    // Hash password                                         //more salt more time take more difficult to brut force
    return await bcrypt.hash(password, saltRounds);  
}

module.exports.hashPassword = hashPassword ;