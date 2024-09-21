import Header from "componatnt/header/header";
import React from "react";
import RegisterForm from "./RegisterForm";

export const metadata = {
  title: "Register Page",
  description: "Description My Register Page",
};

const Page = () => {
  return (
    <>
      <Header isRegister={true} />

      <main className="px-3">
        <RegisterForm />
      </main>
    </>
  );
};

export default Page;
