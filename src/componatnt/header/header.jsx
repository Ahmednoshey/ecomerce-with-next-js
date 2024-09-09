import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Header = ({isRegister=false, isSignin=false }) => {
  return (
    <header id="headerElement" className="flex">
      <Link href="/">
    <div className="logo">
    <FontAwesomeIcon style={{width:"1rem"}} icon={faBagShopping}/>
      <span style={{ fontWeight: "bold" }}>AWU</span>
      <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
    </div>
    </Link>
    
    <nav className="links">
      <Link
        style={{ position: "relative" }}
        className="cart"
        href="/cart"
      >
        <FontAwesomeIcon style={{width:"0.7rem"}} icon={faCartShopping}/>
        $0.00
        <span className="products-number">2</span>
      </Link>

      <Link className={`sign-in ${isSignin ? "border" : null }`} href="/signin">
      <FontAwesomeIcon style={{width:"0.7rem"}} icon={faRightToBracket}/>
        Sign in
      </Link>

      <Link className={`register ${isRegister ? "border" : null }`} href="/register">
      <FontAwesomeIcon style={{width:"0.8rem"}} icon={faUserPlus}/>
        <i className="fa-solid fa-user-plus" />
        Register
      </Link>

    </nav>
  </header>
  );
}

export default Header;
