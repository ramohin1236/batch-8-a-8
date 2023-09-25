import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Donationdetails = () => {

    const [detailss, setDetails] = useState([]);

    const detailsData = useLoaderData();
    console.log(detailsData)
    const { id } = useParams();
    const inteId = parseInt(id)

    useEffect(() => {
        const details = detailsData.find((dt) => dt.id == inteId);
        // console.log(details);
        setDetails(details)
    }, [detailsData, inteId])

    //  const {id,Picture}=detailss;
    console.log(detailss, inteId);
    return (
        <div className="container mx-auto">


<div className="card bg-base-100 shadow-xl  ">
 <div style={{ position: 'relative' }}>
 <figure className=""><img className="h-96 w-[1300px] " src={detailss.Picture} alt="Shoes" />
  </figure >
   <div className="h-20 hero-overlay -mt-20 opacity-90 container mx-auto ">
   <button className="btn w-48" 
  style={{
    backgroundColor: detailss.Text_button_bg,
    color: '#fff', padding: '10px 20px',
borderRadius: '15px', 
  }}
  >{`Donate $${detailss.Price}`}</button>
   </div>
 </div>
  
  <div className="card-body container mx-auto">
    <h2 className="card-title">{detailss.Title}</h2>
    <p className="">{detailss.Description}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

        </div>
    );
};

export default Donationdetails;