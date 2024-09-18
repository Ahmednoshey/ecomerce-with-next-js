
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { notFound } from 'next/navigation';




const Products = () => {
const [arrData, setarrData] = useState([]);

useEffect(() => {
  const getdata = async () => {
    let data = await fetch('http://localhost:3000/api/getAll-products')
    if (!data.ok) {
      notFound();
    }
    let products = await data.json()
    setarrData(products)
  }
  getdata();
}, []);




  return (
    <section className="products flex">

    {arrData.length == 0 && <p>No Products Found</p>}
    
    {arrData.map((item) => {
      return(
        <article key={item.productImg} title={item.Title}
        className="card">
          <Link href={`/prdoduct-details/${item.id}`}>
          <div style={{position: "relative"}} className='imgcontainer'>
          <Image fill src={item.productImg} alt=""/>
        </div>
        </Link>

        <div style={{ width: 300 }} className="content">
          <h1 className="title">{item.Title.slice(0,20)}....</h1>
          <p className="description">
            {item.Description.slice(0,100)}....
          </p>
          <div
            className="flex"
            style={{ justifyContent: "space-between", paddingBottom: "0.7rem" }}
          >
            <div className="price">${item.Price}</div>
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
