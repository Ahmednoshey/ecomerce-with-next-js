import Footer from 'componatnt/footer/footer';
import Header from 'componatnt/header/header';
import React from 'react';
import  './product-details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import { notFound } from 'next/navigation';

export async function generateMetadata ({ params }) {
  let data = await fetch(`http://localhost:3000/api/getOne-product?id=${params}`)
  if (!data.ok) {
    notFound();
  }
  let selectproduct = await data.json()
  return {
    title: selectproduct.Title,
    description: selectproduct.Description,
    
  };
}

 
const Page = async ({params}) => {
  let data = await fetch(`http://localhost:3000/api/getOne-product?id=${params}`)
  let selectproduct = await data.json()

  return (
    <div className="productdetails"
    style={{
      height: "100vh",
  display: "grid",
  alignItems: "center",
  gridTemplateRows: "auto 1fr auto",
    }}>
    <Header/>
    <main style={{ textAlign: "center" }} className="flex" title={selectproduct.Title}>

      <div style={{position:"relative"}} className='img-container'>
      <Image alt="" src={selectproduct.productImg} fill quality={100}/>
      </div>
      
  <div className="product-details">
    <div style={{ justifyContent: "space-between" }} className="flex">
      <h2>{selectproduct.Title.slice(0,15)}....</h2>
      <p className="price">${selectproduct.Price}</p>
    </div>
    <p className="description">
    {selectproduct.Description}
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
