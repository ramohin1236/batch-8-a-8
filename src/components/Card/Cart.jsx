import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Cart = ({data}) => {
    const {id,Picture, Card_bg,Category,Title,Text_button_bg}=data

 

    // console.log(data)
    return (
       <Link to={`/donat/${id}`}>
        <div
        style={{
            backgroundColor: Card_bg,
            color: Text_button_bg,
          }}
        className='card w-full shadow-xl' >
  <figure><img className='w-full h-56'  src={Picture} alt="Shoes" /></figure>
  <div className="card-body">
  <button
 style={{
    backgroundColor: Card_bg,
    color: Text_button_bg,
  }}
  className='btn btn-sm w-24'>{Category}</button>
    
    <p className='font-bold'>{Title}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
       </Link>
    );
};




Cart.propTypes={
    data:PropTypes.object
}

export default Cart;