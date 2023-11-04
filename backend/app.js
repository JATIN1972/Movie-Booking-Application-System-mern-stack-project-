const express = require('express');
const { MongoClient } = require('mongodb')
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config();


PORT = 3500;
mongoose.connect('mongodb+srv://jatinthapliyal02:<Jatinthapliyal*s*19>@jatinthapliyal-project.psoxus9.mongodb.net/') ,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
 .then(()=> {
     console.log('Connected Successfully')
   }
   )
 .catch((e) => console.log(e)); 


app.listen(PORT, () => {
    console.log (`Server running on port: ${PORT}`);
});

  

 const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// middleware section
app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/movies", movieRouter); //try this route
app.use("/booking", bookingRouter);