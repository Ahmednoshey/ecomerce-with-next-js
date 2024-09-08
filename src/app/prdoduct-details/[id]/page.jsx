import Footer from 'componatnt/footer/footer';
import Header from 'componatnt/header/header';
import React from 'react';
import  './product-details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Page = async({params}) => {
  let data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  let selectproduct = await data.json()
  return (
    <div style={{
      height: "100vh",
  display: "grid",
  alignItems: "center",
  gridTemplateRows: "auto 1fr auto",
    }}>
    <Header/>
    <main style={{ textAlign: "center" }} className="flex" title={selectproduct.title}>
  <img alt="" src={selectproduct.image} />
  <div className="product-details">
    <div style={{ justifyContent: "space-between" }} className="flex">
      <h2>{selectproduct.title.slice(0,15)}....</h2>
      <p className="price">${selectproduct.price}</p>
    </div>
    <p className="description">
    {selectproduct.description}
    </p>
    <button className="flex add-to-cart">
    <FontAwesomeIcon style={{width:"1rem"}} icon={faCartPlus}/>
      Add To Cart
    </button>
  </div>
</main>
    <Footer/>  
    </div>
  );
}
export default Page;
