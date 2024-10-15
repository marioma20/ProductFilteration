import { Link } from 'react-router-dom';
import Image1 from './Images/Image1.webp';
function Product(props){
    console.log(props);
    const {product, showbutton} = props;
    return(
        <>
          <div className="card" >
             <img src={product.image} className="card-img-top" alt={product.title}/>
             <div className="card-body">
               <h5 className="card-title">{product.title}</h5>
               <p className="card-text">{product.description}</p>
             {showbutton ? <button className="btn btn-primary" showbutton={true} >
             Details</button> : null} 
                </div>
           </div>
        </>
    );
}
export default Product;