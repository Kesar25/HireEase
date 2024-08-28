import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "HireEase"
    }).then(()=>{
        console.log("Connection to database successful")
    }).catch(e=>{
        console.log("Some error occurred: ", e);
    })
}
