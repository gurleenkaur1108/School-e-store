import MyNavbar from "./Navbar";
import Intro from "./Intro";
import "./styles.css";
import Feature1 from "./feature1";
import Feature2 from "./feature2";
import FAQs from "./FAQs";
import About_land from "../Images/About_land.png";
import Footer from "./Footer";
function About()
{
  return (<div>
    <MyNavbar/>
    <img src={About_land} className="img_land"/>
    <Intro/>
    <Feature1/>
    <Feature2/>
    <FAQs/>
    <Footer/>
  </div>)
}
export default About;