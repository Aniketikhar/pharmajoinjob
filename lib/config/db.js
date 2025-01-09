import mongoose from "mongoose";

const ConnectDB = async () => {
    await mongoose.connect(`mongodb+srv://aniket_1811:aniket1811@atlascluster.isestxc.mongodb.net/pharmajoinjob`)
    console.log("DB Connected")
}

export default ConnectDB;