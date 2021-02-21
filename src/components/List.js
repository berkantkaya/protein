import React from 'react'
import './List.css'
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';


export default function List({product}) {
    
   
    return (
        
        <div className="list">
          <span>
         <Link to={`/detail/${product._id}`}>
          <img src={product.image}/>   
          </Link> 
         </span>  
          <span>{product.brand}({product.miktarbir}gr)</span>  
          <span><i class="fas fa-tags"></i> <strong>%{product.indirim}<i class="fas fa-arrow-down"></i></strong> {product.price} TL</span>  
          <span>
              <Rating size="small" name="half-rating" defaultValue={5} precision={0.5} />
              </span>
          <span>
              
          <button>Sepete Ekle</button>    
          </span>  
        </div>
        
        
    )
}
