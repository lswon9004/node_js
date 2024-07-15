import express from "express";
import randomColor from "randomcolor";

const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    const color = randomColor();
    res.send(`<h1 style="color:${color};">welcome to the Home Page</h1>`);
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});