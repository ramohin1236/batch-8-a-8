import PropTypes from 'prop-types';

const DonationCart = ({money}) => {

    const {Picture,Title,Price,Category, Card_bg,Text_button_bg}=money;
    console.log(money);
    return (
        <div>
          
<div
style={{
    backgroundColor: Card_bg,
    
  }}
href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 ">
    <img className="h-52 w-64" src={Picture} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <button 
        style={{
            backgroundColor: Card_bg,
            color: Text_button_bg,
          }}
        className="btn btn-sm w-20">{Category}</button>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Title}</h5>
     <p 
     style={{
        color:Text_button_bg,
      }}
     className="font-medium">${Price}</p>
     <button
 style={{
    
    background: Text_button_bg,
    color:"white",
  }}
    //  onClick={}
     className="btn mt-4">View Details</button>
    </div>
</div>

        </div>
    );
};


DonationCart.propTypes={
    money: PropTypes.object
}

export default DonationCart;