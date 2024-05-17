// const express = require ('express');
// const app = express();
// const dotenv = require ("dotenv");
// const dbConnection = require('./config/dbConn');
// dotenv.config();
// const port = process.env.PORT || 3000;

// const authRoute = require ("./router/authRoute");
// const fileUploadRoute = require ("./router/fileUploadRoute");
// const cors = require ("cors");
// const fileUpload = require('express-fileupload');
// const categoryRoute = require ("./router/categoryRoute");
// const categoryPurposeRoute = require ("./router/categoryPurposeRoute");


// //middleware for file uplaod
// app.use(fileUpload({useTempFiles: true, tempFileDir: './temp'}))

// //middleware for cloudinary connection
// const cloudinary = require ('./config/cloudinary');
// cloudinary.cloudinaryConnect();




// //middlewares
// app.use(express.json());
// app.use(cors());


// //database Connection
// dbConnection()


// //default route
// app.get("/",(req, res)=>{
//     res.send("Welcome")
// })

// //routes
// app.use('/api/v1/auth',authRoute);
// app.use('/api/v1/upload', fileUploadRoute);
// app.use('/api/v1/category', categoryRoute);
// app.use('/api/v1/categoryPurpose', categoryPurposeRoute);






// app.listen(port, ()=>{
//     console.log(`Server is running on port no : ${port}`);
// })







const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require('express-fileupload');

dotenv.config();
const port = process.env.PORT || 8000;

// Import routes
const authRoute = require("./router/authRoute");
const fileUploadRoute = require("./router/fileUploadRoute");
const categoryRoute = require("./router/categoryRoute");
const categoryPurposeRoute = require("./router/categoryPurposeRoute");

// Middleware for file upload
app.use(fileUpload({ useTempFiles: true, tempFileDir: './temp' }));

// Middleware for cloudinary connection
const cloudinary = require('./config/cloudinary');
cloudinary.cloudinaryConnect();

// Middlewares
app.use(express.json());

// Define allowed origins
const allowedOrigins = ['http://77.37.44.89', 'http://77.37.44.89:3000'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps or curl requests)
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Database connection (assuming you have a `dbConn` module for this)
const dbConnection = require('./config/dbConn');
dbConnection();

// Default route
app.get("/", (req, res) => {
    res.send("Welcome user");
});

// Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/upload', fileUploadRoute);
app.use('/api/v1/category', categoryRoute);
app.use('/api/v1/categoryPurpose', categoryPurposeRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port no: ${port}`);
});
