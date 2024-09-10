"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const SigninForm = () => {
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <form
      onSubmit={async (eo) => {
        eo.preventDefault();
        setLoading(true)
        setError(null)

        //inputs empty
        if (!Email || !Password) {
          setError("All Input Must be Filled");
          toast.error("All Input Must be Filled");
          setLoading(false);
          return;
        }

        // check email and password to signin
        const res = await signIn("credentials", {
          Email,
          Password,
          redirect: false,
        });

        if (!res.ok) {
          setError("Invailed Email or Password");
          toast.error("Invailed Email or Password");
          setLoading(false);
        } else {
          setError("Wellcome");
          toast.success("Wellcome");
          setLoading(false);
        }
      }}
      style={{ textAlign: "left" }}
    >
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
        {Loading? 
        <>
        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span style={{marginLeft:"5px"}}>Loading...</span>
        </>
        : "Sign in"}
      </button>
      <p style={{ color: "#ff7790", marginTop: "50px", textAlign: "center" ,display: "none" }}>
        {Error}
      </p>
    </form>
  );
};

export default SigninForm;
