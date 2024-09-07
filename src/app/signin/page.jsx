import Footer from 'componatnt/footer/footer';
import Header from 'componatnt/header/header';
import React from 'react';
import  './signin.css';


export const metadata = {
  title: "Signin Page",
  description: "Description My Signin Page",
};

const Page = () => {
  return (
    <>
<Header/>

<main className="px-3">
  <form style={{ textAlign: "left" }}>
    <div className="mb-4">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
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
        type="password"
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-primary">
      Sign in
    </button>
  </form>
</main>



<Footer/>
    
    </>
  );
}

export default Page;
