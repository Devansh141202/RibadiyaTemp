import React, { Fragment, useEffect } from 'react';
import Cards from '../layout/Card/Card';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
import bg1 from '../../images/i1.jpg';
import bg4 from '../../images/bg4.jpg';
import bg2 from '../../images/i2.jpg';
import bg3 from '../../images/i3.jpg';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import whitebg from '../../images/whitebg.jpg';
import { FaShoppingCart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { CgMouse } from "react-icons/all";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);


  return (

    <div>

      {/* --- Heropart ---  */}
      <section id='hero'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={whitebg}
              alt="First slide"
            />

            <Carousel.Caption>
              {/* <div className='headline'>
                <p className='tag-bit'>Womens collection</p>
                <p className='tagline'>For colorfull steps in life</p>
                <button className='btn btn-outline-dark btn-head'>SHOP NOW</button>
              </div> */}
              {/* <h1>title 1</h1> */}
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={bg4}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <div className='headline'>
                <p>Highest Quility <br /> Honest prices</p>
              </div> */}
              {/* <h1>title 1</h1> */}
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={bg3}
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <div className='headline'>
                <p>
                  Discover
                </p>
              </div> */}
              {/* <h1>title 1</h1> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </section>

      {/* Popular products  */}
      {/* <section id='Pop'>

        <div className='devider'>
          <h2>Popular Products</h2>
          <hr />
        </div>

        <h5>New Arrivals | <u>Featured</u></h5>

        <div className='row container-fluid'>

          <div className='col-lg-4 mt-5 card-box'>
            <div className='card'>
              <div className='card-head'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
              </div>
              <div className='card-body'>
                <h6 className='title'>title</h6>
                <p className='price'>price</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mt-5 card-box'>
            <div className='card'>
              <div className='card-head'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
              </div>
              <div className='card-body'>
                <h6 className='title'>title</h6>
                <p className='price'>price</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mt-5 card-box'>
            <div className='card'>
              <div className='card-head'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
              </div>
              <div className='card-body'>
                <h6 className='title'>title</h6>
                <p className='price'>price</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mt-5 card-box'>
            <div className='card'>
              <div className='card-head'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
              </div>
              <div className='card-body'>
                <h6 className='title'>title</h6>
                <p className='price'>price</p>
              </div>
            </div>
          </div>

          <div className='col-lg-4 mt-5 card-box'>
            <div className='card'>
              <div className='card-head'>
                <img
                  className="d-block w-100 img-box"
                  src={bg2}
                  alt="Second slide"
                />
              </div>
              <div className='card-body'>
                <h6 className='title'>title</h6>
                <p className='price'>price</p>
              </div>
            </div>
          </div>

        </div>

      </section> */}

      {/* Featured Products */}
      <section className='featured-products'>
        <h2 className="homeHeading">Catagories</h2>
        <div className="container" id="container">   
        </div>
      </section>
<div className="box">
  <div className="row">
    <div className="col-lg-4">
      <h3>Saree</h3>
    </div>
    <div className="col-lg-4">
      <h3>Chaniya Choli</h3>
    </div>
    <div className="col-lg-4">
      <h3>Gowns</h3>
    </div>
  </div>
</div>


      <section className='featured-products'>
        <h2 className="homeHeading">latest Trending</h2>
        <div className="container" id="container">   
        </div>
      </section>

      <section className='featured-products'>
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </section>

      {/* Product-Cards */}
      <section className='Product-Cards'>
              
      </section>

      

    </div>
  );
}

export default Home