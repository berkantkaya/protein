import React from 'react'
import './Slider.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Slider() {
    return (
         <div className="caro">
        <Carousel id="caro">
        <Carousel.Item>
          <img
            className="d-block m-auto  resimm"
            src="https://images.pexels.com/photos/260409/pexels-photo-260409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <Carousel.Caption id="but">
            <button> <span><i class="fab fa-searchengin"></i></span><Link className="textt" to="/product">Keşfedin</Link></button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block m-auto resimmm"
            src="https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Second slide"
          />
      
          <Carousel.Caption id="but">
            <button> <span><i class="fab fa-searchengin"></i></span><Link className="textt" to="/product">Keşfedin</Link></button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block m-auto  resimmmm "
            src="https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />
      
          <Carousel.Caption id="but">
            <button> <span><i class="fab fa-searchengin"></i></span><Link className="textt" to="/product">Keşfedin</Link></button>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}
