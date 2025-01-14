import mongoose from "mongoose";

const ConnectDB = async () => {
    await mongoose.connect(process.env.NEXT_DB_URL)
    console.log("DB Connected")
}

export default ConnectDB;