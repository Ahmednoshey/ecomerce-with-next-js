
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'




const Products = async() => {
  let data = await fetch('https://fakestoreapi.com/products')
  let products = await data.json()

  return (
    <section className="products flex">
    
    {products.map((item) => {
      
      return(

        <article key={item.image} title={item.title}
        className="card">
          <Link href={`/prdoduct-details/${item.id}`}>
          <div style={{position: "relative"}} className='imgcontainer'>
          <Image fill src={item.image} alt=""/>
        </div>
        </Link>

        <div style={{ width: 300 }} className="content">
          <h1 className="title">{item.title.slice(0,20)}....</h1>
          <p className="description">
            {item.description.slice(0,100)}....
          </p>
          <div
            className="flex"
            style={{ justifyContent: "space-between", paddingBottom: "0.7rem" }}
          >
            <div className="price">${item.price}</div>
            <button className="add-to-cart flex">
            <FontAwesomeIcon style={{width:"1rem"}} icon={faCartPlus}/>
              Add To Cart
            </button>
          </div>
        </div>
      </article>

      );
    })}
    
    </section>
  );
}

export default Products;
