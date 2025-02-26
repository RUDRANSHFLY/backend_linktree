import User from "../model/userSchema.js";

export default async function getUser(email) {
    try {
        const user = await User.findOne({email})
        return user;

    } catch (error) {
        console.log("Error while fetching userInfo : ", error);

    }
}