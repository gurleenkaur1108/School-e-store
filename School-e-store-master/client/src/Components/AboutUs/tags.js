import "./styles.css"
import { useEffect,useState } from "react";
function Tag()
{
    const[winWidth,setWidth]=useState(window.innerWidth);
    useEffect(() => {
       function handleResize() {
         setWidth(window.innerWidth);
   }
       window.addEventListener('resize', handleResize)
     });
    return (<div>
    {(winWidth>900||(winWidth<=767&&winWidth>578))&&<>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"60px"}}>
    <button size="md" className="custom_but1">Educational Toys</button>
    <button size="md" className="custom_but1">Principals</button>
    <button size="md" className="custom_but1">Book Sellers</button>
    <button size="md" className="custom_but1">Admission Counsellers</button>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"20px"}}>
    <button size="md" className="custom_but1">Teachers</button>
    <button size="md" className="custom_but1">Sales Consultant</button>
    <button size="md" className="custom_but1">Principals</button>
    <button size="md" className="custom_but1">Career Counsellers</button>
    <button size="md" className="custom_but1">Parents</button>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"20px"}}>
    <button size="md" className="custom_but1">Tution Center </button>
    <button size="md" className="custom_but1">Student</button>
    <button size="md" className="custom_but1">Tutor</button>
    <button size="md" className="custom_but1">E Learning</button>
    </div></>}
    {(winWidth<=900&&winWidth>767)||(winWidth<=578&&winWidth>470)&&<>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"60px"}}>
    <button size="md" className="custom_but1">Educational Toys</button>
    <button size="md" className="custom_but1">Principals</button>
    <button size="md" className="custom_but1">Book Sellers</button>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"20px"}}>
    <button size="md" className="custom_but1">Admission Counsellers</button>
    <button size="md" className="custom_but1">Teachers</button>
    <button size="md" className="custom_but1">Sales Consultant</button>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"20px"}}>
    <button size="md" className="custom_but1">Principals</button>
    <button size="md" className="custom_but1">Parents</button>
    <button size="md" className="custom_but1">Tution Center </button>
    <button size="md" className="custom_but1">Student</button>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"20px"}}>
    <button size="md" className="custom_but1">Tutor</button>
    <button size="md" className="custom_but1">Career Counsellers</button>
    <button size="md" className="custom_but1">E Learning</button>
    </div>
    </>}
    {(winWidth<=470)&&<>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"60px"}}>
    <button size="md" className="custom_but1">Educational Toys</button>
    <button size="md" className="custom_but1">Principals</button>
    <button size="md" className="custom_but1">Book Sellers</button>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"20px"}}>
    <button size="md" className="custom_but1">Admission Counsellers</button>
    <button size="md" className="custom_but1">Sales Consultant</button>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"20px"}}>
    <button size="md" className="custom_but1">Principals</button>
    <button size="md" className="custom_but1">Teachers</button>
    <button size="md" className="custom_but1">Parents</button>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"20px"}}>
    <button size="md" className="custom_but1">Tutor</button>
    <button size="md" className="custom_but1">Student</button>
    <button size="md" className="custom_but1">E Learning</button>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end",marginTop:"20px"}}>
    <button size="md" className="custom_but1">Tution Center </button>
    <button size="md" className="custom_but1">Career Counsellers</button>
    </div>
    </>}
    </div>);
}
export default Tag;