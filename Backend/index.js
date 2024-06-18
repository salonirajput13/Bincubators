const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const UserRouter = require("./Routers/User")
const ContactRouter = require("./Routers/ContactRouter")
const ServiceRouter = require("./Routers/Service")
const FeedbackRouter = require("./Routers/FeedbackRouter")
const EnquiryRouter = require("./Routers/EnquiryRouter")
const UtilRouter = require("./Routers/Utils")

app.use(cors({
    origin: ['http://localhost:5173']
}))
app.use(express.json());
app.use("/users1", UserRouter);
app.use('/contacts', ContactRouter);
app.use('/services', ServiceRouter);
app.use('/feedbacks', FeedbackRouter);
app.use('/enquiry', EnquiryRouter);
app.use('/util', UtilRouter);

app.use(express.static('./Uploads'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);