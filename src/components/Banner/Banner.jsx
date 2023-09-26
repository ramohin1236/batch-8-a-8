

import img from '/Resources/background.jpg'






const Banner = () => {

    

    return (

<div className="hero container mx-auto">
    <div className="">
        
        <img className="opacity-10" src={img} alt="" />
        
        <div className="absolute -mt-36 ml-8 md:-mt-56 md:ml-40 lg:-mt-72 lg:ml-64">
        <h1 className="mb-5 text-2xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
        <div className="flex items-center  ">
            
            <input type="text" 
           
            placeholder="Search here" className="input input-bordered w-full max-w-xs" />
             <button className="py-3 px-3 bg-[#FF444A] rounded-md">Search</button>
              </div>
            
        </div>
    </div>
</div>
    );
};




export default Banner;