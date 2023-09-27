import { useEffect, useState } from "react";
import DonationCart from './DonationCart';



const Donation = () => {

    const [isShow,setShow]=useState(false);
    const [donation, setDonation]=useState([])
    const [datafound, setDatafound]=useState(false)

    const handleDeleteAll =()=>{
        localStorage.clear()
        setDonation([])
        setDatafound("Data no found")
    }

  
    console.log(isShow)
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
             <div className="">

               <div className="text-center">
                {
                  donation.length >0 && <button 
                  onClick={handleDeleteAll}
                  className="btn btn-secondary mt-10 ">Delete All</button>  
                }
               </div>

             {
                datafound ? <p className="h-[80vh] flex justify-center items-center text-5xl font-bold">{datafound}</p>
                :
                 <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-12 gap-5">
                    {
                     isShow?  
                     donation.map(money=><DonationCart 
                        key={money.id}
                        money={money}
                        ></DonationCart>) 
                        :
                        donation.slice(0,2).map(money=><DonationCart 
                            key={money.id}
                            money={money}
                            ></DonationCart>)
                    }
                 </div>
             } 
                </div> 
                <div className="mt-10 text-center mb-20">
                {
                    donation.length >2 && <button 
                    onClick={()=>setShow(!isShow)}
                    className="btn bg-green-700  text-white">{isShow? "See Less": "See More "}</button> 
                }                    
                    </div>    
        </div>
    );
};

export default Donation;