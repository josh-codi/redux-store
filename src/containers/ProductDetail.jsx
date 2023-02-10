/* eslint-disable */
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

function ProductDetail() {
  const product = useSelector(state=>state.product)
  const {productId} = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const res = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err)=>{
      console.log(err)
    })
    dispatch(selectedProduct(res.data))
  }
  useEffect(()=>{
    if (productId && productId !== '') fetchProductDetail();
    return ()=>{
      dispatch(removeSelectedProduct())
    }
    
  }, [productId])
  return (
    <div className='ui grid container'>
      {
        Object.keys(product) === 0 ? <div>Loading ...</div> :(
<div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            {/* <div className="ui vertical divider">And</div> */}
            <div className="middle aligned row">
              <div className="column lp">
                <img src={product.image} alt="" className="ui fluid image" />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a href="" className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex={'0'}>
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
        
    </div>
  )
}

export default ProductDetail