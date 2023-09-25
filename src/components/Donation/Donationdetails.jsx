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
        <div className=" ">


<div className="card bg-base-100 shadow-xl  ">
  <figure className=""><img className="h-96 w-[1200px] " src={detailss.Picture} alt="Shoes" />
  </figure >
  
  
  <div className="card-body container mx-auto">
    <h2 className="card-title">{detailss.Title}</h2>
    <p className="">If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

        </div>
    );
};

export default Donationdetails;