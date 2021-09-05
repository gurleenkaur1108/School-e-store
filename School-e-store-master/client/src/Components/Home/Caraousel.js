import Carousel from 'react-bootstrap/Carousel';
import "./styles.css";  
function MyCaraousel()
{
  return(<Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 CaraouselDesign"
        src="https://c8.alamy.com/comp/R2K02D/a-vector-illustration-of-family-shopping-for-back-to-school-R2K02D.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>School-e-Store</h3>
        <p>Providing you the best facility</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 CaraouselDesign"
        src="https://image.shutterstock.com/image-vector/vector-illustration-kids-their-parents-260nw-304554152.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
      <h3>School-e-Store</h3>
        <p>Providing you the best facility</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>); 
}
export default MyCaraousel;