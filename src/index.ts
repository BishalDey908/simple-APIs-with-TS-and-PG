require("./config/db.config");
const express = require("express");
const app = express();
app.use(express.json())

import productRoutes from "./routes/product.routes";
import userRoutes from "./routes/user.routes";


app.use("/api",productRoutes)
app.use("/api",userRoutes)

app.listen("3004",()=>{
    console.log("server is running on port 3004");
})