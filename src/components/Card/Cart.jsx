import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Cart = ({data}) => {
    const {id,Picture, Card_bg,Category,Category_bg,Title
    }=data
    // console.log(data)
    return (
       <Link to={`/donation/${id}`}>
        <div className='card w-full shadow-xl' >
  <figure><img className='w-full' src={Picture} alt="Shoes" /></figure>
  <div className="card-body">
  <button className={`btn btn-sm w-16 bg-${Category_bg}` }>{Category}</button>
    
    <p>If a dog chews shoes whose shoes does he choose?</p>
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