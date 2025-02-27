import bcrypt from "bcrypt";
import User from "../model/userSchema.js";
import jwt from "jsonwebtoken"
import "dotenv/config"
import Referral from "../model/referSchema.js";

export default async function logInUser(req, res) {
    console.log(`Request URL: ${req.url}, Request Method: ${req.method}`);

    try {
        const { email, password } = req.body;

        const data = [email, password]

        console.table(data)

        const user = await User.findOne({ email })

        if (!user) {
            console.log("No user exist with this email 🚨")
            return res.status(401).json({ error: "No user exist with this email" });
        }


        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if (!isPasswordMatch) {
            console.log("Invalid password 🚨");
            return res.status(401).json({ error: "Invalid password" });
        }

        const accessToken = process.env.ACCESS_TOKEN_SECRET;

        if (!accessToken) {
            console.log("ACCESS TOKEN SECRET not found 🚨");
            throw new Error('ACCESS TOKEN SECRET not found 🚨')
        }


        if (user.referredBy) {
            console.log(`refererdByUser ID : ${user.referredBy} referredUser: ${user.id}`);

            const refer = await Referral.findOne({
                refererdByUser: user.referredBy,
                referredUser: user.id,
            })

            if (refer && refer.status !== "success") {
                const updatedRefer = await Referral.findOneAndUpdate(
                    {
                        refererdByUser: user.referredBy,
                        referredUser: user.id,
                    },
                    {
                        $set: {
                            status: "success",
                            sucessDate: new Date(),
                        }
                    }, { new: true }
                )
            }
            console.log("Referall Updated ✅");
        }


        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            }
            , accessToken,
            {
                expiresIn: '1h'
            }
        )

        return res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        console.error('❌ Error logging in user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}