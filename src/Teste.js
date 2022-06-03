import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Teste = () => {

    require('./estilos/teste.css');

    return(
        <div>
            <Carousel className="Carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/Ffpjdei.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>First slide label</h2>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/Ffpjdei.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2>Second slide label</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/Ffpjdei.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Third slide label</h2>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/Ffpjdei.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>R$51,00</h2>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.imgur.com/Ffpjdei.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>First slide label</h2>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default Teste;