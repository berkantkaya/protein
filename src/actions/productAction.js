import { CardActions } from '@material-ui/core';
import axios from 'axios';
import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productConstant'

export const listProducts=()=>async(dispatch)=>{
    console.log("11111111")
    dispatch({type:PRODUCT_LIST_REQUEST});
    try{
        const {data} =await axios.get('/api/products')
        console.log("BACKKK- PRODUCTS",data)
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})
    }catch(error){
        console.log(error)
      dispatch({type:PRODUCT_LIST_FAIL,payload:error.message})
    }
}

export const detailProducts=(productId)=>async(dispatch)=>{
    dispatch({type:PRODUCT_DETAILS_REQUEST,payload:productId});
    try{
        const {data} =await axios.get(`/api/products/${productId}`)
        console.log("BACKKK- PRODUCTTT",data)
        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
    }catch(error){
      dispatch({type:PRODUCT_DETAILS_FAIL,payload:error.response && error.response.data.message ? error.response.data.message:error.message})
    }
}
