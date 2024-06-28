const express = require ('express');
const app = express();
const dotenv = require ("dotenv");
const dbConnection = require('./config/dbConn');
dotenv.config();
const port = process.env.PORT || 3000;

const authRoute = require ("./router/authRoute");
const fileUploadRoute = require ("./router/fileUploadRoute");
const cors = require ("cors");
const fileUpload = require('express-fileupload');
const categoryRoute = require ("./router/categoryRoute");
const categoryPurposeRoute = require ("./router/categoryPurposeRoute");
const propertyListingCategoryRoute = require ("./router/propertyListingCategoryRoute");
const userPropertyRoute = require ("./router/userPropertyRoute");


//middleware for file uplaod
app.use(fileUpload({useTempFiles: true, tempFileDir: './temp'}))

//middleware for cloudinary connection
const cloudinary = require ('./config/cloudinary');
cloudinary.cloudinaryConnect();




//middlewares
app.use(express.json());
app.use(cors());


//database Connection
dbConnection()


//default route
app.get("/",(req, res)=>{
    res.send("Welcome")
})

//routes
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/upload', fileUploadRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/categoryPurpose', categoryPurposeRoute);
app.use('/api/v1/propertyListingCategory', propertyListingCategoryRoute);
app.use('/api/v1/userProperty', userPropertyRoute);






app.listen(port, ()=>{
    console.log(`Server is running on port no : ${port}`);
})

