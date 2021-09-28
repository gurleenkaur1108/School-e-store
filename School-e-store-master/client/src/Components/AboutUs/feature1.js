import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import "./styles.css";
import Block from "../Images/block.png";
import "bootstrap/dist/css/bootstrap.min.css";
function Feature1()
{
  return (<div style={{backgroundColor:"#F1E4FF",textAlign:"center"}}>
  <Row className="m-0" style={{width:"100%",paddingLeft:"25px",paddingTop:"40px"}}>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">Find Your School Tools</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div>
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">Can’t Find Bookset?
Dont Worry!</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div>
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">Find the right Learning for your Child</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div>
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">Find Your True Potential</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div>
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">Can’t find Tution Center? Don’t Worry</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div>
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"30px"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">Compete With Yourself</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    <div style={{marginTop:"30px"}}><a style={{color:"#8C30F5",textDecoration:"none"}} href="#">Explore  →</a></div>
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  </Row>
  <Button variant="outline-dark" size="lg" style={{marginLeft:"auto",marginTop:"20px",marginBottom:"20px"}} className="button">Explore all →
      {/* <Link to="/login">Log-In</Link> */}
    </Button>
</div>)
}
export default Feature1;