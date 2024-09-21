
"use client";
import React from 'react';
import {signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faRightFromBracket, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import router from 'next/router';


const Nav = ({isRegister=false, isSignin=false, Admin=false}) => {
  const { data: session, status } = useSession();


  if (status == "loading") {
    return(
      <span className="loaderres">Loading</span>
    )
  }

  if (status=="authenticated" && session.user.email == "ahmed2027@gmail.com") {
    return(
      <nav className="links flex">
        <Link style={{marginLeft:"10px"}}
  className={`register ${Admin ? "border" : null }`} href="/add-product">
      <FontAwesomeIcon style={{width:"0.8rem"}} icon={faPlus}/>
      Add Product
      </Link>

  <Link style={{marginLeft:"10px"}} onClick={() => {
   signOut()
  }}
  className={`register ${isRegister ? "border" : null }`} href="/signin">
      <FontAwesomeIcon style={{width:"0.8rem"}} icon={faRightFromBracket}/>
        Sign out
      </Link>

      <div style={{marginLeft:"10px"}} className='flex'>
  <FontAwesomeIcon style={{width:"0.8rem"}} icon={faUser}/>
  <p>Wellcome {session.user.name}♥</p>
  </div>
      
    </nav>

    )
    return
  }


  return (
  <nav className="links flex">
    
      {status == "unauthenticated"&&(
        <>
      <Link className={`sign-in ${isSignin ? "border" : null }`} href="/signin">
      <FontAwesomeIcon style={{width:"0.7rem"}} icon={faRightToBracket}/>
        Sign in
      </Link>

      <Link className={`register ${isRegister ? "border" : null }`} href="/register">
      <FontAwesomeIcon style={{width:"0.8rem"}} icon={faUserPlus}/>
        Register
      </Link>
      </>
      )}

{status == "authenticated"&&(
  <>
  <Link
        style={{ position: "relative" }}
        className="cart"
        href="/cart"
      >
        <FontAwesomeIcon style={{width:"0.7rem"}} icon={faCartShopping}/>
        $0.00
        <span className="products-number">2</span>
      </Link>
  <Link style={{marginLeft:"10px"}} onClick={() => {
   signOut()
  }}
  className={`register ${isRegister ? "border" : null }`} href="/signin">
      <FontAwesomeIcon style={{width:"0.8rem"}} icon={faRightFromBracket}/>
        Sign out
      </Link>
      <div style={{marginLeft:"10px"}} className='flex'>
  <FontAwesomeIcon style={{width:"0.8rem"}} icon={faUser}/>
  <p>Wellcome {session.user.name}</p>
  </div>
      
      </>
)}
    </nav>
  );
}

export default Nav;
