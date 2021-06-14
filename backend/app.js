import express from "express";
import dotenv from "dotenv";
const app = express();
import {
  CognitoIdentityProviderClient,
  ListUsersCommand,
} from "@aws-sdk/client-cognito-identity-provider";

dotenv.config();
// Update AWS Config
app.get("/find", async (req, res) => {
  try {
    const client = new CognitoIdentityProviderClient({
      region: process.env.REGION,
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_KEY,
    },
    });
    const params = {};
    const command = new ListUsersCommand({
      UserPoolId: process.env.USER_POOL_ID,
    });
    const data = await client.send(command);
    console.log(data.Users);
    res.send(data.Users)
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000);
