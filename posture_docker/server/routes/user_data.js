const express     = require('express');
const router      = express.Router();

const UserModel   = require('../models/user_data')
const bkfd2Password = require("pbkdf2-password");
const hasher        = bkfd2Password();

const passport = require('passport');




router.post('/save', async function(req, res) {
    const id = req.session.passport.user['user'];
    const turtlecntsound = req.body.turtlecntsound;
    const  start_time = 1;
    const  end_time = 2;
    console.log(id, turtlecntsound);
    //console.log(id, password, name, email);
    //console.log('DB_USER', process.env.DB_USER);

    var user_data = {
        id : id,
        turtlecnt: turtlecntsound,
        start_time : start_time,
        end_time : end_time,

    };

    try {
        const result = await UserModel.SaveData(user_data); // Assuming there's a deleteUser function in UserModel
        if (result.error) {
            console.log(result.error);
            res.status(500).json({ error: 'An error occurred while deleting the user.' });
        } else {
            console.log('USER_DATA SAVED');
            //res.status(200).json({ message: 'User deleted successfully.' });

            //res.render('index', {userId: id});

            /* router.get('/', function(req, res) {
                //userID를 view에 같이 넘겨주는 기능
                
                res.render('index', {userId: id});
            }); */

            res.redirect('/');
            //res.render('index', {userId: id});
            

            

                
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }

    

   
});



    

    





module.exports = router;