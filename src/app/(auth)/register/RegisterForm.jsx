"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterForm = () => {
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const router = useRouter();

  const rigister = async () => {};

  return (
    <form
      onSubmit={async (eo) => {
        eo.preventDefault();
        setLoading(true)
        setError(null)
        //inputs empty
        if (!Email || !Name || !Password) {
          setError("All Input Must be Filled");
          setLoading(false)
          return;
        }

        // check email
        const resUserExit = await fetch("api/checkEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Email }),
        });

        const IsUserChek = await resUserExit.json();

        if (IsUserChek.user) {
          setError("Email Already Exist");
          setLoading(false)
          return;
        }

        // send data to DB

        const response = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Name, Email, Password }),
        });

        //Complete
        if (response.ok) {
          // @ts-ignore
          eo.target.reset();
          router.push("/signin");
          setLoading(false)
        } else {
          setError("Failed To Creat Account,Please Try Again");
          setLoading(false)
        }

        setLoading(false)
      }}
      style={{ textAlign: "left" }}
    >
      <div className="mb-4">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          onChange={(eo) => {
            setName(eo.target.value);
          }}
          required
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          onChange={(eo) => {
            setEmail(eo.target.value);
          }}
          required
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          onChange={(eo) => {
            setPassword(eo.target.value);
          }}
          required
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        {Loading? "Loading": "Create Account"}
      </button>
      <p style={{ color: "#ff7790", marginTop: "50px", textAlign: "center" }}>
        {Error}
      </p>
    </form>
  );
};

export default RegisterForm;
