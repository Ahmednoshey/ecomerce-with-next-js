
import './home.css';
import {faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from 'componatnt/footer/footer';
import Header from 'componatnt/header/header';
import Products from './products';
import Loading from './loading';
import { Suspense } from 'react';




export default function Home() {
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
    <h1 className="recommended">
    <FontAwesomeIcon style={{width:"1rem"}} icon={faCheck}/>
      Recommended for you
    </h1>

  <Suspense fallback={<Loading/>}> 
  <
// @ts-ignore
  Products/>
  </Suspense> 

  </main>

<Footer/>
</>

  );
}
