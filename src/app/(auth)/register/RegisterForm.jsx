"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [WrongPass, setWrongPass] = useState(false);
  const router = useRouter();

  const rigister = async () => {};

  return (
    <form
      onSubmit={async (eo) => {
        eo.preventDefault();
        setWrongPass(false);
        setLoading(true);
        setError(null);
        //inputs empty
        if (!email || !name || !Password) {
          setError("All Input Must be Filled");
          toast.error("All Input Must be Filled");
          setLoading(false);
          return;
        }

        //strong password
        const regexPass =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regexPass.test(Password)) {
          setError(
            "Password must be latest 8 characters with 1 Uppercase, 1lowercase, 1special character, 1 numer."
          );
          toast.warn(
            "Password must be latest 8 characters with 1 Uppercase, 1lowercase, 1special character, 1 numer."
          );
          setWrongPass(true);
          setLoading(false);
          return;
        }

        // check email
        const resUserExit = await fetch("api/checkEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const IsUserChek = await resUserExit.json();

        if (IsUserChek.user) {
          setError("Email Already Exist");
          toast.error("Email Already Exist");
          setLoading(false);
          return;
        }

        // send data to DB
        const response = await fetch("api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, Password }),
        });

        //Complete
        if (response.ok) {
          toast.success("Your Account has been Created Succesfully");
          // @ts-ignore
          eo.target.reset();
          router.push("/signin");
          setLoading(false);
        } else {
          setError("Failed To Creat Account,Please Try Again");
          toast.error("Failed To Creat Account,Please Try Again");
          setLoading(false);
        }

        setLoading(false);
      }}
      style={{ textAlign: "left" }}
    >
      <div className="mb-4">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          onChange={(eo) => {
            setname(eo.target.value);
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
            setemail(eo.target.value);
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
          style={{ backgroundColor: WrongPass ? "#edadad" : null }}
          onChange={(eo) => {
            setPassword(eo.target.value);
            setWrongPass(false);
          }}
          required
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {Loading ? (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span style={{ marginLeft: "5px" }}>Loading...</span>
          </>
        ) : (
          "Create Account"
        )}
      </button>
      <p
        style={{
          color: "#ff7790",
          marginTop: "50px",
          textAlign: "center",
          display: "none",
        }}
      >
        {Error}
      </p>
    </form>
  );
};

export default RegisterForm;
