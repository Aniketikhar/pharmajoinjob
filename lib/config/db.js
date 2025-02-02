import mongoose from "mongoose";

const ConnectDB = async () => {
  mongoose
    .connect(`mongodb+srv://sachinkedar68:5zGGdPIdWTEfuve5@cluster0.7depg.mongodb.net/PharmaJoin`)
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => console.log("db couldnt connect: " + err.message));
};

export default ConnectDB;
