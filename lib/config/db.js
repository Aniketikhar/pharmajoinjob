import mongoose from "mongoose";

const ConnectDB = async () => {
  mongoose
    .connect(process.env.NEXT_DB_URL)
    .then(() => console.log("DB Connected Successfully", process.env.NEXT_DB_URL))
    .catch((err) => console.log("db couldnt connect: " + err.message));
};

export default ConnectDB;
