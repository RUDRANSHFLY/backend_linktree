import User from "../model/userSchema.js";



export default async function getReferals(req,res){
    const userId = req.user.id

    console.log(`user id : ${userId}`);
    

    try {
        const referrals = await User.find({referredBy : userId})
        const count = referrals.length;
        res.status(200).json({"message" :  "sucess" , referrals, count});
    } catch (error) {
        console.log("Error while fetching refeerals : ", error);
        res.status(400).json({"message" : "Error fetching referaals" })
    }
}