import Carousel from 'react-bootstrap/Carousel';
import "./styles.css";  
import Comma from "../Images/comma.png";
function FAQs()
{
  return(<Carousel>
    <Carousel.Item style={{backgroundColor:"#D5FAFC"}}>
    <img src={Comma} className="Comma"/>
    <div style={{display:"inline"}}>
    <h1 className="FAQ-head">FAQs</h1>
    <p className="FAQ-subtitle">Frequently Asked Questions</p>
    </div>
    <div style={{display:"flex",justifyContent:"space-around"}}>
    <div style={{display:"flex",flexDirection:"row"}}>
        <div className="box1">
        {/* <img src={Comma} className="smallComma"/> */}
        <b>Q. Random Cliche Question<br/></b>
        What is Lorem Ipsum?<br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets .    
        </div>
    <div style={{display:"flex",flexDirection:"column",marginTop:"-10px"}}>
        <div className="box2">
        {/* <img src={Comma} className="smallComma"/> */}
        <b>Q. Random Cliche Question<br/></b>
        What is Lorem Ipsum?<br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.     
        </div>
        <div className="box2">
        {/* <img src={Comma} className="smallComma"/> */}
        <b>Q. Random Cliche Question<br/></b>
        What is Lorem Ipsum?<br/>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.    
        </div>
    </div>
    </div>
    </div>
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
export default FAQs;