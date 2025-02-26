import mongoose from "mongoose";
import connectDB from "./connectDb.js";

describe("Database Connection", () => {
    beforeAll(async () => {
        await connectDB();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("should connect to the database successfully", async () => {
        await expect(connectDB()).resolves.not.toThrow();
    });

    test('should throw an error if DATABASE_URL is not set', async () => {
        //? Temporarily unset the DATABASE_URL for this test
        const originalDbUrl = process.env.DATABASE_URL;
        delete process.env.DATABASE_URL;

        await expect(connectDB()).rejects.toThrow("Database url not found...! 🚫");


        //? Restore the original DATABASE_URL
        process.env.DATABASE_URL = originalDbUrl;
    });


});
