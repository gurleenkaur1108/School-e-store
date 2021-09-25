import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Box(params) {
    return (<Row style={{width:"100%",paddingLeft:"25px"}}>
    <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
    <Card className="cardDesign" style={{marginTop:"20px",background:" linear-gradient(219.56deg, rgba(0, 0, 0, 0.2) -14.19%, rgba(1, 1, 1, 0.2) 23.05%, rgba(255, 255, 255, 0.136875) 67.91%, rgba(0, 0, 0, 0) 103.79%)"}}>
    <Card.Body>
      <Card.Title style={{color:"#000E8D",font:"poppins",fontWeight:"700",marginTop:"5px",fontSize:"30px",lineHeight:"40px"}}>Find the Perfect School for your Perfect Child.</Card.Title>
      <Card.Text style={{paddingLeft:"5px",paddingRight:"50px"}}>
      We help you find the best school for your child in <br/>your locality.<br/>
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Explore more →</a></div>
      </Card.Text>
      <img style={{marginTop:"-100px",width:"150px",height:"200px",marginLeft:"140px"}} src="https://s3-alpha-sig.figma.com/img/d5fe/343e/cd734cce02139c5f846379fe78f1cae3?Expires=1631491200&Signature=fsE~DXy7SXBN-kUDHBbJFnPTE0XMceOuCqIEXYuo4n1wpxNMk3o6GZbBkU67BKeeiYl-B0Jz01zqZRFp~C-jQvrIAigdMAtLXZ35cxfdcmI93ZXa3B9Boxgdt~bZR05POdPPMFxnaWbugGCxpeh7iDkOln5RX7xJ0adh9bHU1YMf9h4YxvYRUpAQlb8R3o4OBX0uS8k33NVtc6jFhas8QEVJDgd2vbNeiaIr-nazGQtDF097Wxez2OThzEWSuI6184~zAZIl5xRhXQPqzt4mqyi-vCVkw7CrgOwiDL3sqqrjwNEqhZfKm5RAqIqGwBHbPm0IYet3od~nU9bKyEHdiw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}}lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"20px",background: "linear-gradient(219.56deg, rgba(0, 0, 0, 0.2) -14.19%, rgba(1, 1, 1, 0.2) 23.05%, rgba(255, 255, 255, 0.136875) 67.91%, rgba(0, 0, 0, 0) 103.79%),linear-gradient(0deg, rgba(20, 0, 255, 0.2), rgba(20, 0, 255, 0.2))"}}>
    <Card.Body>
      <Card.Title style={{color:"#6D0A5D",font:"poppins",fontWeight:"700",marginTop:"5px",fontSize:"30px",lineHeight:"40px"}}>Don’t have Books? We have that Covered!</Card.Title>
      <Card.Text style={{paddingRight:"10px",paddingLeft:"20px",textAlign:"right"}}>
      CBSE, ICSE, State Boards, we have everything! Find all the books as <br/> well as booksets from the best selling publications.
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Order now →</a></div>
      </Card.Text>
      <Card.Img style={{marginTop:"-120px",width:"150px",height:"200px"}} src="https://s3-alpha-sig.figma.com/img/88e4/8d46/2edfe3f3d60a1830ade263b534ff7124?Expires=1631491200&Signature=Yzh4iNDmtlORD3DLz1kubuM9CurzToVVpNHKJf8PieNhd-EoBlIl6Pf7UI8-vtGl7xkiRoqKKNUe0GI6dLMIA6Nsg86sjqyq3tLErN3kmFRegdRGEObGXnA5JctTSAIBpzCAvmdS2B2FfTFkMkoaPLrPoe67UftMgjh8pytvbPdO-bNbG7E1narWFjlB5DnQlyB6AcxjCEtFRHTPvLu89qeZyA-KcHWOKB0F~3oz9NkXkkQCw~ANXhcmEj9z23~~ET~oFToiNHlOcySpUpRTzxZFjOANC43eNUToWOl~F18XQidscqVLcolJgAuRJ40jUv44O6Iv194xSTc3RN44zA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"20px",background: "linear-gradient(219.56deg, rgba(0, 0, 0, 0.2) -14.19%, rgba(1, 1, 1, 0.2) 23.05%, rgba(255, 255, 255, 0.136875) 67.91%, rgba(0, 0, 0, 0) 103.79%),linear-gradient(0deg, rgba(20, 0, 255, 0.2), rgba(20, 0, 255, 0.2))"}}>
    <Card.Body>
      <Card.Title style={{color:"#6D0A5D",font:"poppins",fontWeight:"700",marginTop:"5px",fontSize:"30px",lineHeight:"40px"}}>Don’t have Books? We have that Covered!</Card.Title>
      <Card.Text style={{paddingRight:"10px",paddingLeft:"20px",textAlign:"right"}}>
      CBSE, ICSE, State Boards, we have everything! Find all the books as <br/> well as booksets from the best selling publications.
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Order now →</a></div>
      </Card.Text>
      <Card.Img style={{marginTop:"-120px",width:"150px",height:"200px"}} src="https://s3-alpha-sig.figma.com/img/88e4/8d46/2edfe3f3d60a1830ade263b534ff7124?Expires=1631491200&Signature=Yzh4iNDmtlORD3DLz1kubuM9CurzToVVpNHKJf8PieNhd-EoBlIl6Pf7UI8-vtGl7xkiRoqKKNUe0GI6dLMIA6Nsg86sjqyq3tLErN3kmFRegdRGEObGXnA5JctTSAIBpzCAvmdS2B2FfTFkMkoaPLrPoe67UftMgjh8pytvbPdO-bNbG7E1narWFjlB5DnQlyB6AcxjCEtFRHTPvLu89qeZyA-KcHWOKB0F~3oz9NkXkkQCw~ANXhcmEj9z23~~ET~oFToiNHlOcySpUpRTzxZFjOANC43eNUToWOl~F18XQidscqVLcolJgAuRJ40jUv44O6Iv194xSTc3RN44zA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={4} md={6} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"20px",background: "#FFD60099"}}>
    <Card.Body>
      <Card.Title style={{color:"#980D00",font:"poppins",fontWeight:"700",marginTop:"5px",fontSize:"30px",lineHeight:"40px",marginLeft:"10px"}}>Can’t find Stationary? Don’t Worry</Card.Title>
      <Card.Text style={{paddingRight:"10px",paddingLeft:"20px"}}>
      We are here to find what you need. 
      Find an Amazing range of Stationary on School-E-Store at the best price.
      <div style={{marginTop:"10px",textDecoration:"none"}}><a href="#">Order now →</a></div>
      </Card.Text>  
      <Card.Img style={{marginTop:"-150px",width:"300px",height:"400px",marginLeft:"50px"}} src="https://s3-alpha-sig.figma.com/img/a70d/b99a/0ffabc0f172ec3424b86de74d42598fc?Expires=1631491200&Signature=CZJaNQGnwsvg~TkYlts6oF9kCv5hf-ThgkalRFViq41v4~OqvYYMC1WcA7g2f~~Stf9TNCrByfy69~5nRrhHPWGW5fYtrSATqQDrQUspz5dc-MYvWQvCM7eYwfrVo4lyQ5ktq4wLSpEw59d3bn9obMdDXidRrzOv0KQ3BOp5BhmlFs0zw3AtrLFzDEqXbeBuq~Pb~eLiasUf5ac6odROaqGXJwZsrBmIeCvaFYXWJ~uqhJv0DEihL2o~DLbJPvPqL0rYWWXc35TKH8oAAtMEY3lEFaTaDCKa~-bk6sjvrTFW-Z325Olys836JlIARqcLorB~fF~IqoCt4s2SWQhFdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    </Card.Body>
  </Card>
  </Col>
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={8} md={12} sm={12} xs={12}>
  <Row> 
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={3} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"20px",background: "#B4FFC999"}}>
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
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={3} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"20px",background: "#B4FFC999"}}>
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
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={3} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"20px",background: "#B4FFC999"}}>
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
  <Col style={{display:"flex",justifyContent:"space-around"}} lg={6} md={3} sm={6} xs={12}>
  <Card className="cardDesign" style={{marginTop:"20px",background: "#B4FFC999"}}>
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