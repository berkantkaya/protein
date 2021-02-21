import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailProducts } from '../actions/productAction';
import Details from '../components/Details'
import LoadingBox from '../components/LoadingBox';
import data from '../data'

export default function Detail(props) {
    const dispatch=useDispatch();
    const productId=props.match.params.id;

    const  productDetails=useSelector(state=>state.productDetails);
    const {product,loading}=productDetails;

        console.log("detailll: ", product)
    
     useEffect(()=>{
        dispatch(detailProducts(productId))
     },[dispatch,productId])

    
    return (
        <div className="detail">
            {   loading ? (<LoadingBox/>) : 
                   <Details key={product._id} product={product}/>

                    
                }
        </div>
    )
}
