const express = require("express");

const app = express();
const AWS = require("aws-sdk");
// AWS.Config()
const dotenv = require("dotenv");
dotenv.config();
// Update AWS Config
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
});

app.get("/find", async (req, res) => {
  try {
    var cognitoidentityserviceprovider =
      new AWS.CognitoIdentityServiceProvider();
    const data =  await cognitoidentityserviceprovider.listUsers(
      {
        UserPoolId: process.env.USER_POOL_ID,
      }
    ).promise();
    res.send(data.Users)
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000);
