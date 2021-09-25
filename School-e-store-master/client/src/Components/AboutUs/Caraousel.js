import Carousel from 'react-bootstrap/Carousel';
import "./styles.css";  
import Comma from "../Images/comma.png"
function MyCaraousel()
{
  return(<Carousel>
    <Carousel.Item style={{backgroundColor:"#D5FAFC"}}>
    <img src={Comma} className="Comma"/>
    <div style={{display:"inline"}}>
    <h1 style={{fontSize:"60px",fontWeight:"600",display:"inline",marginLeft:"8px"}}>FAQs</h1>
    <p style={{fontSize:"18px",marginLeft:"10px"}}>Frequently Asked Questions</p>
    </div>
    <div>
    Q. Random Cliche Question
    What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets .    </div>
    </Carousel.Item>
    {/* <Carousel.Item>
      <img
        className="d-block w-100 CaraouselDesign"
        src="https://image.shutterstock.com/image-vector/vector-illustration-kids-their-parents-260nw-304554152.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
      <h3>School-e-Store</h3>
        <p>Providing you the best facility</p>
      </Carousel.Caption>
    </Carousel.Item> */}
  </Carousel>); 
}
export default MyCaraousel;