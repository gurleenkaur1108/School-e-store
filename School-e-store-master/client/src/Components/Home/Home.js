import Navbar from "./Navbar";
import Feature from "./features";
import School from "./School";
import MyCaraousel from "./Caraousel";
import Box from "./box";
import Break from "./break";
import Bestseller from "./bestsellers";
import Stationaries from "./Stationaries";
import Store_For_Schools from "./Store_For_Schools";
function Home() {
  return (
    <div>
      <Navbar />
      <Feature />
      <MyCaraousel />
      <div style={{ textAlign: "center",paddingTop:"15px",paddingBottom:"15px" }}><h3> Trending Schools Near Me </h3></div>
      <School/>
      <div style={{ textAlign: "center",paddingTop:"15px",paddingBottom:"15px" }}><p> 500+ schools have joined School-E-Store. <a href="#">Join Us Now and Get Exciting Benefits!</a></p></div>
      <Box/>
      <Break title="Bestsellers"/> 
      <Bestseller/>
      <Break title="Stationaries"/>
      <Stationaries/>
      <Break title="Store for Schools"/>
       <Store_For_Schools/>
    </div>
  );
}
export default Home;
