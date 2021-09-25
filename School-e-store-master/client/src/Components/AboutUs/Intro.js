import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../Images/About.png"
function Intro()
{
   return (<div>
   <h1 style={{fontWeight:"630",marginLeft:"48px",marginTop:"30px",marginBottom:"20px"}}>About Us</h1>
    <Row className="p-0 m-0">
        <Col lg={7} md={7} sm={12} xs={12} style={{display:"flex",justifyContent:"space-around"}}>
          <img src={About} className="About_img"/>  
        </Col>
        <Col lg={5} md={5} sm={12} xs={12} className="p-0 m-0">
        <div className="Intro_pad">Welcome to SchooleStore, the one-stop shop for all your learning, Books, Online Exams and counseling, and many more! Whether you need school prescribed exclusive book set and best learning tools for the young ones, stationery for the budding artists, SchooleStore has it all. We ensure you a delightful shopping experience all the time, every time. <br/> 
Shopping for the beginning of the school season. Taking a day off to shop. Long queues at school trunk book school, uniform shops, sizes unavailable turns out to be an expensive and time-consuming affair. We firmly believe that every shopping experience should remain simple, fun, and value for money. As easy as using your cell phone or computer, as convenient as having your products delivered to your doorstep at your own leisure and convenience. All products sold on SchooleStore are 100% genuine and can be easily exchanged as per the customer-friendly SchooleStore returns and exchange policy.
.</div></Col>
    </Row>
   </div>);
}
export default Intro;