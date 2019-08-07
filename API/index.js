//importing express, then creating an instance of it
//then we can export module
const express = require('express');
const app = express();
const users = require('./src/api/user-routes');
const listings = require('./src/api/listing-routes');
const bookings = require('./src/api/booking-routes');
const authRouter = require('./src/api/auth-routes');
const cors = require("cors");
const userList = require('./src/models/user-model');
//const jwtAuth = require('./src/utilities/middleware/jwtAuth')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//app.use(logger);

app.get('/api/user/', (req, res) => {
  res.send(userList);
});

//app.use(jwtAuth);

//Routes middleware
app.use('/api/users', users);
app.use('/api/listings', listings);
app.use('/api/bookings', bookings);
app.use('/api/auth', authRouter)


const PORT = process.env.PORT || 8100;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));