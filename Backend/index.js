const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

const userRouter = require('./Routers/User');
const serviceRouter = require('./Routers/Service')

app.use(cors({
    origin: ['http://localhost:5173']
}))

// middleware
app.use(express.json());
app.use('/user', userRouter);                        
app.use('/services', serviceRouter);                        

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });