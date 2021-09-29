import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import "./style1.css";  
import "bootstrap/dist/css/bootstrap.min.css";
import Nursery from "../Images/nursery.png";
import Book2 from "../Images/Book2.png";
import Pen from "../Images/pen.png";
function Box(params) {
    return (<Row style={{width:"100%"}} className="m-0">
    <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
    <Card className="cardDesign_home" style={{marginTop:"20px",background:" linear-gradient(219.56deg, rgba(0, 0, 0, 0.2) -14.19%, rgba(1, 1, 1, 0.2) 23.05%, rgba(255, 255, 255, 0.136875) 67.91%, rgba(0, 0, 0, 0) 103.79%)"}}>
    <Card.Body>
      <Card.Title style={{color:"#000E8D",font:"poppins",fontWeight:"700",marginTop:"5px",fontSize:"30px",lineHeight:"40px"}}>Find the Perfect School for your Perfect Child.</Card.Title>
      <Card.Text style={{paddingLeft:"5px",paddingRight:"50px"}}>
      We help you find the best school for your child in <br/>your locality.<br/>
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Explore more →</a></div>
      </Card.Text>
      <img className="cardImage_home" style={{marginTop:"-100px",width:"150px",height:"200px",marginLeft:"140px"}} src={Nursery} />
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}}lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign_home" style={{marginTop:"20px",background: "linear-gradient(219.56deg, rgba(0, 0, 0, 0.2) -14.19%, rgba(1, 1, 1, 0.2) 23.05%, rgba(255, 255, 255, 0.136875) 67.91%, rgba(0, 0, 0, 0) 103.79%),linear-gradient(0deg, rgba(20, 0, 255, 0.2), rgba(20, 0, 255, 0.2))"}}>
    <Card.Body>
      <Card.Title style={{color:"#6D0A5D",font:"poppins",fontWeight:"700",marginTop:"5px",fontSize:"30px",lineHeight:"40px"}}>Don’t have Books? We have that Covered!</Card.Title>
      <Card.Text style={{paddingRight:"10px",paddingLeft:"20px",textAlign:"right"}}>
      CBSE, ICSE, State Boards, we have everything! Find all the books as <br/> well as booksets from the best selling publications.
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Order now →</a></div>
      </Card.Text>
      <Card.Img className="cardImage2_home" style={{marginTop:"-120px",width:"150px",height:"200px"}} src={Book2} />
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign_home" style={{marginTop:"20px",background: "linear-gradient(219.56deg, rgba(0, 0, 0, 0.2) -14.19%, rgba(1, 1, 1, 0.2) 23.05%, rgba(255, 255, 255, 0.136875) 67.91%, rgba(0, 0, 0, 0) 103.79%),linear-gradient(0deg, rgba(20, 0, 255, 0.2), rgba(20, 0, 255, 0.2))"}}>
    <Card.Body>
      <Card.Title style={{color:"#6D0A5D",font:"poppins",fontWeight:"700",marginTop:"5px",fontSize:"30px",lineHeight:"40px"}}>Don’t have Books? We have that Covered!</Card.Title>
      <Card.Text style={{paddingRight:"10px",paddingLeft:"20px",textAlign:"right"}}>
      CBSE, ICSE, State Boards, we have everything! Find all the books as <br/> well as booksets from the best selling publications.
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Order now →</a></div>
      </Card.Text>
      <Card.Img className="cardImage2_home" style={{marginTop:"-120px",width:"150px",height:"200px"}} src={Book2} />
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign_home" style={{marginTop:"20px",background: "#FFD60099"}}>
    <Card.Body>
      <Card.Title style={{color:"#980D00",font:"poppins",fontWeight:"700",marginTop:"5px",fontSize:"30px",lineHeight:"40px",marginLeft:"10px"}}>Can’t find Stationary? Don’t Worry</Card.Title>
      <Card.Text style={{paddingRight:"10px",paddingLeft:"20px"}}>
      We are here to find what you need. 
      Find an Amazing range of Stationary on School-E-Store at the best price.
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Order now →</a></div>
      </Card.Text>  
      <Card.Img className="cardImage3_home" style={{marginTop:"-50px",width:"200px",height:"300px",marginLeft:"100px"}} src={Pen} />
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={8} md={12} sm={12} xs={12}>
  <Row className="m-0"> 
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={12}>
  <Card className="cardDesign_home" style={{marginTop:"20px",background: "#B4FFC999"}}>
    <Card.Body>
      <Card.Title style={{marginLeft:"15px",fontSize:"30px",weight:"700",color:"#18728E",lineHeight:"40px"}}>E-learning Solutions</Card.Title>
      <Card.Text style={{paddingRight:"5px",paddingLeft:"10px"}}>
      From school academics to competitive exams, we bring learning at your doorstep.
      Exciting E-learning, guidance and mentorship plans for all students. 
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Explore more →</a></div>
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={12}>
  <Card className="cardDesign_home" style={{marginTop:"20px",background: "#B4FFC999"}}>
    <Card.Body>
      <Card.Title style={{marginLeft:"15px",fontSize:"30px",weight:"700",color:"#18728E",lineHeight:"40px"}}>E-learning Solutions</Card.Title>
      <Card.Text style={{paddingRight:"5px",paddingLeft:"10px"}}>
      From school academics to competitive exams, we bring learning at your doorstep.
      Exciting E-learning, guidance and mentorship plans for all students. 
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Explore more →</a></div>
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={12}>
  <Card className="cardDesign_home" style={{marginTop:"20px",background: "#B4FFC999"}}>
    <Card.Body>
      <Card.Title style={{marginLeft:"15px",fontSize:"30px",weight:"700",lineHeight:"40px",color:"#18728E"}}>E-learning Solutions</Card.Title>
      <Card.Text style={{paddingRight:"5px",paddingLeft:"10px"}}>
      From school academics to competitive exams, we bring learning at your doorstep.
      Exciting E-learning, guidance and mentorship plans for all students. 
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Explore more →</a></div>
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={12}>
  <Card className="cardDesign_home" style={{marginTop:"20px",background: "#B4FFC999"}}>
    <Card.Body>
      <Card.Title style={{marginLeft:"15px",fontSize:"30px",weight:"700",color:"#18728E",lineHeight:"40px"}}>E-learning Solutions</Card.Title>
      <Card.Text style={{paddingRight:"5px",paddingLeft:"10px"}}>
      From school academics to competitive exams, we bring learning at your doorstep.
      Exciting E-learning, guidance and mentorship plans for all students. 
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Explore more →</a></div>
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  </Col>
  </Row>);
}
export default Box;