const express     = require('express');
const router      = express.Router();

const UserModel   = require('../models/user_data')
const bkfd2Password = require("pbkdf2-password");
const hasher        = bkfd2Password();

const passport = require('passport');




router.get('/save', async function(req, res) {
    const id = req.body.id;
    const turtlecntsound = req.body.turtlecntsound;
    const  start_time = 1;
    const  end_time = 2;
    //console.log(id, password, name, email);
    //console.log('DB_USER', process.env.DB_USER);


    try {
        const result = await UserModel.SaveData(id); // Assuming there's a deleteUser function in UserModel
        if (result.error) {
            console.log(result.error);
            res.status(500).json({ error: 'An error occurred while deleting the user.' });
        } else {
            console.log('USER_DATA SAVED');
            res.status(200).json({ message: 'User deleted successfully.' });
            

                
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }

    res.render('/');

   
});



    

    





module.exports = router;