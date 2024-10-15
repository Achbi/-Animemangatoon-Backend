import mongoose from "mongoose";

const connectToMongoDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://harshitbahety41:28jbVL5mNP3TMoyw@cluster0.ljihm.mongodb.net/");
         
        console.log("connected to mongodb");
    } catch(error){
     console.log("connecting to mongodb",error.message)
    }
}
export default connectToMongoDB;