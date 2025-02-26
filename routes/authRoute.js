import express from "express"
import createUser from "../controller/createUser.js";
import logInUser from "../controller/loginUser.js";

const authRouter = express.Router();


authRouter.post('/register',(req,res) => {
    return createUser(req,res);
});

authRouter.get('/login',(req,res) => {
    return logInUser(req,res)
});

export default authRouter;