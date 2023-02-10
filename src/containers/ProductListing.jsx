/* eslint-disable */
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ActionTypes } from '../redux/constants/actionTypes'
import ProductComponent from './ProductComponent'

function ProductListing() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      axios.get('https://fakestoreapi.com/products')
      .then(res=>{
        dispatch({
          type: ActionTypes.SET_PRODUCTS,
          payload: res.data
        })
      })
    }
  }, [])
  
  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing