import macs from "../assets/images/mac2.png";
import watch from "../assets/images/watch.jpg";
import lap from "../assets/images/lap3.png";
import { FaApple } from "react-icons/fa";
function Hero() {
  const lists = [
    {
      heading: (<> <FaApple />Watch</>),
      para: ["Live healthier.Train better.Stay connected"],
      btn1: "Learn more",
      btn2: "Shop watch",
      image: watch

    },
    {
      heading: "MacBook Air",
      para: ["Sky blue color.","Sky high performance with M4"],
      btn1: "Learn more",
      btn2: "Shop mac",
      image: lap

    }
  ]



  return (
    <section >
      <div >




        <h1 className="text-7xl  font-bold">iPhone</h1>
        <p className="text-3xl  mt-4">Meet the iphone in 16 family</p>
        <div className="mt-4" >
          <button className="bg-blue-700 text-white py-2 px-4 rounded-full">
            Learn more
          </button>
          <button className=" text-blue-700 py-2 px-4 border border-1 border-blue-700 rounded-full mx-4">
            Shop iPhone
          </button>
        </div>
        <p className="text-2xl  bg-gradient-to-r from-blue-500
             to-pink-500 text-transparent bg-clip-text mt-4">Built for Apple intelligence</p>
<div>  <img src={macs} className="w-64 h-64 mx-auto object-cover"></img></div>
      
      </div>
      <hr></hr>
<div >
  {lists.map((list) => (
          <div>
            <h1 className="flex justify-center text-6xl border-red-600">{list.heading}</h1>
            {list.para.map((li)=>(<p className="text-3xl">{li}</p>
))}
            <div className="mt-4" >
              <button className="bg-blue-700 text-white py-2 px-4 rounded-full">
                {list.btn1}
              </button>
              <button className=" text-blue-700 py-2 px-4 border border-1 border-blue-700 rounded-full mx-4">
                {list.btn2}
              </button>
            </div>
            <img src={list.image} alt="watch" className="mx-auto w-64 h-64  "></img>
          </div>
          
        ))}

</div>
      
        
       


        
    </section>
    )
}
export default Hero;