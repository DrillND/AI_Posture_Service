const db = require('./database');       
module.exports = {
    SaveData: async function(user_data) {
        try {
            const result = await db.query('INSERT INTO user_data SET ?', user_data);
            return {result: result, error: null};
        } catch (error) {
            return {result: null, error: error};
        }
    },
    

}