// @ts-nocheck

import Header from "componatnt/header/header";
import React from "react";
import SigninForm from "./signinForm";

export const metadata = {
  title: "Signin Page",
  description: "Description My Signin Page",
};

const Page = () => {
  return (
    <>
      <Header isSignin={true} />

      <main className="px-3">
        <SigninForm />
      </main>
    </>
  );
};

export default Page;
