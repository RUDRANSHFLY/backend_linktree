import User from "../model/userSchema.js";



export default async function getReferals(req,res){
    const userId = req.user.id

    console.log(`user id : ${userId}`);
    

    try {
        const referrals = await User.find({referredBy : userId})
        console.table(referrals)
        res.status(200).json(referrals);
    } catch (error) {
        console.log("Error while fetching refeerals : ", error);
        res.status(400).json({"message" : "Error fetching referaals" })
    }
}