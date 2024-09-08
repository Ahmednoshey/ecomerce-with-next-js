import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';



// const myproducts = [
//   {
//     title: "Product Title",
//     description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
//     image: "./images/1.png",
//     price: 100
//   },
//   {
//     title: "Product Title",
//     description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
//     image: "./images/2.webp",
//     price: 100
//   },
//   {
//     title: "Product Title",
//     description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
//     image: "./images/3.webp",
//     price: 100
//   },
//   {
//     title: "Product Title",
//     description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
//     image: "./images/4.webp",
//     price: 100
//   },
//   {
//     title: "Product Title",
//     description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
//     image: "./images/5.webp",
//     price: 100
//   },
//   {
//     title: "Product Title",
//     description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
//     image: "./images/6.webp",
//     price: 100
//   },
//   {
//     title: "Product Title",
//     description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
//     image: "./images/7.webp",
//     price: 100
//   },
//   {
//     title: "Product Title",
//     description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
//     image: "./images/8.png",
//     price: 100
//   },
  

// ]



const Products = async() => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  let data = await fetch('https://fakestoreapi.com/products')
  let products = await data.json()

  return (
    <section className="products flex">
    
    {products.map((item) => {
      
      return(

        <article key={item.image} title={item.title}
        className="card">
        <Link href={`/prdoduct-details/${item.id}`}>
          <img width={266} height={400} src={item.image} alt=""/>
        </Link>
        <div style={{ width: 266 }} className="content">
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
