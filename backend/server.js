import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`listening at port ${process.env.PORT}`);
})