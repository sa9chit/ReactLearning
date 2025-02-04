

function Navigation() {
  return (
    <div className=" flex justify-between p-4 bg-black font-[PP Mori] uppercase  text-white"> 
    <span >Sanchit</span>
    <div className="">
      {["contact" , "more" , "about" , "our work" , "insights"].map((val ,ind)=>{
       
      return <a key={ind} className={`${ind == 0 && "mr-37" }  mr-5`}>{val}</a>
        
      })}
    </div>
    </div>
  )
}

export default Navigation