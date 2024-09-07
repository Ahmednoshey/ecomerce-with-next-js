import Header from '../componatnt/header/header';
import Footer from '../componatnt/footer/footer';
import './home.css';
import { faCartPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const myproducts = [
  {
    title: "Product Title",
    description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
    image: "./images/1.png",
    price: 100
  },
  {
    title: "Product Title",
    description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
    image: "./images/2.webp",
    price: 100
  },
  {
    title: "Product Title",
    description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
    image: "./images/3.webp",
    price: 100
  },
  {
    title: "Product Title",
    description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
    image: "./images/4.webp",
    price: 100
  },
  {
    title: "Product Title",
    description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
    image: "./images/5.webp",
    price: 100
  },
  {
    title: "Product Title",
    description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
    image: "./images/6.webp",
    price: 100
  },
  {
    title: "Product Title",
    description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
    image: "./images/7.webp",
    price: 100
  },
  {
    title: "Product Title",
    description: "Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore dolor in, accusantium laudantium accusamus.",
    image: "./images/8.png",
    price: 100
  },
  

]

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
    <section className="products flex">
    
    {myproducts.map((item) => {
      
      return(

        <article key={item.image}
        className="card">
        <a href="/pages/product-details.html">
          <img width={266} src={item.image} alt="" srcSet="" />
        </a>
        <div style={{ width: 266 }} className="content">
          <h1 className="title">{item.title}</h1>
          <p className="description">
            {item.description}
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
  </main>

<Footer/>
</>

  );
}
