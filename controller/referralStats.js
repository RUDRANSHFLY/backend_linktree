import Referral from "../model/referSchema.js";

export default async function referralStats(req, res) {
    try {
        const userId = req.user.id
        const suceessCount = await Referral.countDocuments({ status: "success" , refererdByUser : userId });
        console.log(`the sucessCount for referral-stats : ${suceessCount}`)
        res.status(200).json({ "message": "sucess", suceessCount });

    } catch (error) {
        console.log("Error while fetching referral-stats : ", error);
        res.status(400).json({ "message": "Error fetching referral-stats" });
    }
}