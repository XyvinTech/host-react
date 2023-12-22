const express = require('express');
const blogmodel = require('../model/BlogData');
const jwt = require('jsonwebtoken')
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const UserData = require('../model/UserData')

router.post('/login', async (req, res) => {
    try {
        console.log(req.body);

        var email = req.body.email;
        var pwd = req.body.password;



       
        if (email == 'qw' && pwd == 'qw') {

            let payload = {
                email: email,
                password: pwd,
           
            }



            let token = jwt.sign(payload, 'reactblogapp');
            res.status(200).send({ message: 'Success', token: token })
        }
        else {
            res.status(400).send({ message: 'Unauthorised' });
        }


    } catch (error) {
        res.status(404).send({ message: 'Not found' });
    }

})


module.exports = router;