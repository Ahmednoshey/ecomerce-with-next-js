
"use client";
import React from 'react';
import {signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightFromBracket, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Loading from 'app/(pages)/(home)/loading';

const Nav = ({isRegister=false, isSignin=false }) => {
  const { data: session, status } = useSession();

  return (
  <nav className="links flex">
      <Link
        style={{ position: "relative" }}
        className="cart"
        href="/cart"
      >
        <FontAwesomeIcon style={{width:"0.7rem"}} icon={faCartShopping}/>
        $0.00
        <span className="products-number">2</span>
      </Link>


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
  <Link style={{marginLeft:"10px"}} onClick={() => {
    signOut()
  }}
  className={`register ${isRegister ? "border" : null }`} href="">
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
