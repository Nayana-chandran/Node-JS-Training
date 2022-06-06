const express = require('express');
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3010;
const userModel = require("./dbmodel/model");
const Onboarding = require("./dbmodel/onboardingmodel");
const mongoose = require("mongoose");

app.get('/', (req, res) => {
  res.send('Hello World!11');
});

app.put("/save-onboarding-data", async (req, res , next) => {
    console.log(req.body.uuid)
    res.send('save World!11');
    // const user = Onboarding.replaceOne({'uuid' : req.body.uuid}, req.body)
    const user = Onboarding(req.body);
    try {
      await user.save();
      res.send('data saved !!!');
      res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
    res.send('doneeeee');
});

app.get('/fetch-onboarding-data', async (req, res) => {
    console.log(req.body);
    let uuid = req.param('uuid'); //req.query('mynid');
    let userData = await Onboarding.find({ uuid: uuid}) ;
    console.log('userDatauserData', userData)
    var result = {};
    result.error = false;
    result.statusCode = 200;
    result.success = true;
    result.message = 'success';
    result.response = {userData};
    result.response.data = {};
    return res.json(result)
    res.send('fetch World!11', uuid);
});


mongoose.connect(
    "mongodb+srv://contusmyndev:vulmnccdtPBiQxtc@clustermyn.nbyfa.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    //   useFindAndModify: false,
      useUnifiedTopology: true,
    // useCreateIndex: true,
    //   w: "majority",
    })
    .then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

