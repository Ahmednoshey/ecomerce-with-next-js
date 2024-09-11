// @ts-nocheck
"use client";
import './home.css';
import {faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from 'componatnt/footer/footer';
import Header from 'componatnt/header/header';
import Products from './products';
import Loading from './loading';
import { Suspense } from 'react';
import {useSession } from "next-auth/react";



export default function Home() {
  const { data: session, status } = useSession();
  return (
    
    <>
  <div className="top-img">
    
    <Header/>

    <section className="content">
      <p className="lifestyle">Lifestyle collection</p>
      <p className="men">MEN</p>
      <p className="sale">
        SALE UP TO <span>30% OFF</span>
      </p>
      <p className="free-shipping">Get Free Shipping on orders over $99.00</p>
      <button>Shop Now</button>
    </section>
  </div>
  <main className="">
    <h1 className="recommended flex">
    <FontAwesomeIcon style={{width:"1rem", marginRight:"10px", marginLeft:"10px"}} icon={faCheck}/>
      Recommended for you
    </h1>

    {status == "loading"&&(<Loading/>)}

    {status == "unauthenticated"&&(

      <h3
      style={{display:"flex", justifyContent:"center",marginBlock:"4rem"}}
      >You must be Signed in to View The Producted Content on This Page</h3>
    )}

{status == "authenticated"&&(
  <Suspense fallback={<Loading/>}> 
  <Products/>
  </Suspense> 
)}
  </main>

<Footer/>

</>

  );
}
