

const Banner = () => {
    return (
        <div className="hero opacity-80 h-96 " style={{backgroundImage: 'url(../../../Resources/background.jpg)'}}>
  <div className="hero- "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold text-[#0B0B0B]">I Grow By Helping People In Need</h1>
      <div className="flex ">
      <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
      <button className="py-3 px-3 bg-[#FF444A] rounded-md">Search</button>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default Banner;