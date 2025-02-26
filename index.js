import express from "express"
import "dotenv/config"
import authRouter from "./routes/authRoute.js";
import connectDB from "./db/connectDb.js"



const app = express()
const PORT = process.env.PORT || 3000  


await connectDB();

app.use(express.json());


app.use('/api/auth',authRouter)


app.listen(PORT,() => {
    console.log(`Server started 🌟`);
    console.log(`http://localhost:${PORT}`)
})