import express from "express"
import createUser from "../controller/createUser.js";
import logInUser from "../controller/loginUser.js";
import getUser from "../controller/getUser.js";
import authenticateToken from "../controller/authenticateToken.js";

const authRouter = express.Router();


authRouter.post('/register',(req,res) => {
    return createUser(req,res);
});

authRouter.get('/login',(req,res) => {
    return logInUser(req,res)
});

authRouter.get('/userinfo', authenticateToken , (req,res) => {
    return getUser(req , res)
})

export default authRouter;