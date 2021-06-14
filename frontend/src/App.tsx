import React, { useState } from "react";
import "./App.css";
import { Auth } from "aws-amplify";
import Amplify from "@aws-amplify/core";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  async function handleSubmit(event: any) {
    event.preventDefault();

    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          name: name,
        },
      });
      alert("Signup success");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="App">
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="email"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label>
          Name:
          <input
            type="email"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default App;
