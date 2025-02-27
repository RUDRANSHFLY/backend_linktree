import crypto from "crypto"

export default function generateReferralCode(){
    return crypto.randomBytes(4).toString("hex").toUpperCase()
}