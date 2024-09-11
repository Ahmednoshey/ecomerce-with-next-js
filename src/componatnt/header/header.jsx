
import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Nav from './nav';



const Header = () => {


  return (
    <header id="headerElement" className="flex">
      <Link href="/">
    <div className="logo">
    <FontAwesomeIcon style={{width:"1rem"}} icon={faBagShopping}/>
      <span style={{ fontWeight: "bold" }}>AWU</span>
      <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
    </div>
    </Link>
    
  <Nav/>

  </header>
  );
}

export default Header;
