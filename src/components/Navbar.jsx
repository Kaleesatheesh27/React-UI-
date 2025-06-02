import {FaApple,FaSearch,FaShoppingBag} from "react-icons/fa";

function Navbar(){
const menuList=["Store","Mac","ipad","iphone","Entertainment","watch","Airpots","tv and home"


];
return(

<nav className="position sticky top-0"> 
    <div className="container">
 <ul className="flex justify-around">
    
   <li><FaApple/></li> 
   {menuList.map((name,index)=>(
      <li key={index}>{name}</li>
   ))}
   <li><FaSearch/></li>
   <li><FaShoppingBag/></li>
    </ul>
    <p className="my-6"> Get up to 12 months of No Cost EMI◊ plus up to ₹8000.00
       instant cashback‡ on selected products with eligible cards.<span className="text-blue-400">shop</span> </p>
    </div>
     </nav>

);
}
export default Navbar ;
