import mac from "../assets/images/lap3.png";
import  watch from "../assets/images/watch.jpg";




function section(){
   const  imageList=[
        {title:"VWDC25",
          prag:"Apple world wide developers conference.join us online on our site from 9 to 13 june",
          image:mac,
          button:["Learn more","Buy"]
        },
        {
            title:"iPhone Air",
            prag:"Now supercharged by m3 chip",
            image:watch,
            button:["Learn"]
        }
    ]
return(
<main className="mt-20"> 
    <div className="flex ">
         {imageList.map((img,index)=>(
           <div key={index}  className="border border-gray-500 mx-6 w-2/4 shadow-2xl rounded-lg">
            <h1 className="mt-4 text-4xl">{img.title}</h1>
            
        <p className="mt-4 text-2xl ">{img.prag}</p>
           <div className="mt-4">
    {img.button.map((li,index)=>(
        <button key={index} className=" px-6 py-2 bg-blue-500 boreder mx-4 rounded-full">{li }</button>
    ))}
</div>
<div><img src={img.image} alt="image" className="w-full h-full"></img></div>
    



           </div> 
        ))}

    </div>
       
</main>
);}

export default section;
