"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "@/app/context/AuthContextProvider";
import { useRouter } from "next/navigation";

const initialValue = { username: "", password: "" };

export default function Login() {
  const { userLogin, user } = useAuth();

  const [input, setInput] = useState(initialValue);
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      await userLogin(input);
      setInput(initialValue);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="border shadow-lg rounded-lg flex flex-col gap-4 px-12 py-8"
      >
        <p className="font-bold">SIGN IN</p>
        <TextField
          label="Username"
          value={input.username}
          onChange={handleChange}
          name="username"
        />
        <TextField
          label="Pssword"
          value={input.password}
          onChange={handleChange}
          name="password"
          type="password"
        />
        <Button variant="contained" type="submit">
          SIGN IN
        </Button>
      </form>
    </div>
  );
}
