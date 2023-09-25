import { useEffect, useState } from "react";
import DonationCart from './DonationCart';



const Donation = () => {

    const [donation, setDonation]=useState([])
    const [datafound, setDatafound]=useState(false)

    useEffect(()=>{
        const donationCart=JSON.parse(localStorage.getItem('donation'))
       

        if(donationCart){
            setDonation(donationCart)
        }
        else{
            setDatafound("Data no found")
        }

    },[])
   
    // console.log(donation);

    return (
        <div>
             <div>
             {
                datafound ? <p className="h-[80vh] flex justify-center items-center text-5xl font-bold">{datafound}</p>
                :
                 <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12 gap-5">
                    {
                       donation.map(money=><DonationCart 
                       key={money.id}
                       money={money}
                       ></DonationCart>) 
                    }
                 </div>
             } 
                </div>    
        </div>
    );
};

export default Donation;