import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useEffect,useState } from "react";
import "./styles.css";
import Block from "../Images/block.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Tag from "./tags";
function Feature2() {
    const[winWidth,setWidth]=useState(window.innerWidth);
    useEffect(() => {
       function handleResize() {
         setWidth(window.innerWidth);
   }
       window.addEventListener('resize', handleResize)
     })
  return (
    <div>
      <Row className="m-0">
        <Col lg={4} md={5} sm={12} xs={12}>
          <img
            className="image3"
            src="https://s3-alpha-sig.figma.com/img/47fe/db76/de4bd899eac35a1d4bebfc12da9b3fa0?Expires=1633305600&Signature=gKh4~d~DPil4E-loutQO0f-kOpPhsF1NIrpSWaat2GJr3MMjFfHc1Mif746beJb1nwYWuPpbItBzVOUCo7StSwXrc4iLVFaAb~AVNO83iI6zQlVE09UfiNf7bO3nxP8u~-9~Ws~Fsc0Y4wBMXgZ0bfLaiAtiFHbNCsdJDAxpkemovHQhJgCavzOF7NhMmvqLhUGBaO0CvBuk91DDUPBRohfdkLcpC4FYsQ1~g0wwYhCzVK63mzEWyc7ptdWNBEaHq0OG1tLCnN04HimlgtP304e0Whe6ghO3ib6CZh9WQJck1OENRVb7M0xNK4bUspUt~LJCkq0w~7RQy-B-AG9AHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </Col>
        <Col lg={8} md={7} sm={12} xs={12}>
          <div className="fea2-tit" >
            We connect you with the right {winWidth>913&&<br/>}people, Product & Services:
          </div>
          {winWidth>767&&<Tag/>}
        </Col>
      </Row>
      {winWidth<=767&&<Tag/>}
 <Row className="m-0" style={{width:"100%",paddingLeft:"25px",paddingTop:"40px"}}>
 {(winWidth<768)&&<Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={4} sm={12} xs={12}> 
  <img className="image4" src="https://s3-alpha-sig.figma.com/img/7eef/df98/d44d86dc426dacff7fb30916eb42b2aa?Expires=1633305600&Signature=VKUlNA1IIG1ZsDL8z9HqALDNbdRU6-4-qSoRdrtbHyhK5zTzbBjTkoIghztzXBOgZnRxoNxI1TexO3HKtx0lo477NccqKJfaeDW5LD07bOeXHCke5qa~hOZiuyhxXRVJpsQyTVkzqCxXoL35QCzRLEkksQ2iyBTasCsEG9fN7Ehk1PxNOd~b8dqOkHbGlP9BsmLuiOAL~WYV1vISJBrFLih0wsXr-TeJ~eze9lGbM18pMpW8wXyeGaOSm3RMDcAdU0FHumZzufJTPKgb7g0cK3958AZQyouUAR1VjIIII5MEftXvYBBQCccClzEdPw56T2oV8sd57SO4h7W1dlhcCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
  </Col>}
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={8} md={8} sm={12} xs={12}>
  <Row className="m-0 fea-row">
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={6}>
  <Card className="cardDesign" style={{marginTop:"30px",textAlign:"center"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">User friendly</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={6}>
  <Card className="cardDesign" style={{marginTop:"30px",textAlign:"center"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">User friendly</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={6}>
  <Card className="cardDesign" style={{marginTop:"30px",textAlign:"center"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
      <Card.Title className="cardTit">User friendly</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={6} sm={6} xs={6}>
  <Card className="cardDesign" style={{marginTop:"30px",textAlign:"center"}}>
  <Card.Body>
  <img className="feature_img" src={Block} />
    <Card.Title className="cardTit">User friendly</Card.Title>
    <Card.Text style={{paddingLeft:"5px"}}>
    Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tell us erat.
    </Card.Text>
  </Card.Body>
  </Card>
  </Col>
  </Row>
  </Col>
  {(winWidth>767)&&<Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={4} sm={12} xs={12}> 
  <img className="image4" src="https://s3-alpha-sig.figma.com/img/7eef/df98/d44d86dc426dacff7fb30916eb42b2aa?Expires=1633305600&Signature=VKUlNA1IIG1ZsDL8z9HqALDNbdRU6-4-qSoRdrtbHyhK5zTzbBjTkoIghztzXBOgZnRxoNxI1TexO3HKtx0lo477NccqKJfaeDW5LD07bOeXHCke5qa~hOZiuyhxXRVJpsQyTVkzqCxXoL35QCzRLEkksQ2iyBTasCsEG9fN7Ehk1PxNOd~b8dqOkHbGlP9BsmLuiOAL~WYV1vISJBrFLih0wsXr-TeJ~eze9lGbM18pMpW8wXyeGaOSm3RMDcAdU0FHumZzufJTPKgb7g0cK3958AZQyouUAR1VjIIII5MEftXvYBBQCccClzEdPw56T2oV8sd57SO4h7W1dlhcCA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
  </Col>}    
 </Row>
    </div>
  );
}
export default Feature2;