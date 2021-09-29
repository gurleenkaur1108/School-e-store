import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Book from "../Images/book.png";
import Admission from "../Images/admission.png";
import Elearning from "../Images/e-learning.png";
import Stationaries from "../Images/stationaries.png";
import Selfhelp from "../Images/selfhelp.png";
import Freeres from "../Images/freeres.png";
function Feature()
{
  return(
  <Row className="options" style={{marginBottom:"40px",paddingLeft:"25px"}} className="m-0">
    <Col lg={2} md={4} sm={4} xs={6}>
        <img className="imageSymbol" src={Book}/>
        Books/E-books
    </Col>
    <Col lg={2} md={4} sm={4} xs={6}>
        <img className="imageSymbol" src={Admission}/>
        Admissions
    </Col>
    <Col lg={2} md={4} sm={4} xs={6}>
        <img className="imageSymbol" src={Elearning}/>
        E-Learning
  </Col>
  <Col lg={2} md={4} sm={4} xs={6}>
    <img className="imageSymbol" src={Stationaries}/>
    Stationaries
  </Col>
  <Col lg={2} md={4} sm={4} xs={6}>
    <img className="imageSymbol" src={Selfhelp}/>
    Self Help
  </Col>
  <Col lg={2} md={4} sm={4} xs={6}>
  <img className="imageSymbol" src={Freeres}/>
  Free Resources</Col>
</Row>);

}
export default Feature;