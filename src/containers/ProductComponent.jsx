import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductComponent() {
    const products = useSelector(state=>state.allProducts.products)
    

    return (
        <div className='four column wide'>
            <h1>ProductComponent</h1>
            
            <div className="ui link cards">
            {
                products?.map((val, idx, arr)=>{
                    const {id, price, image, title, category} = val
                    return (
                        <div className="card" key={id}>
                            <Link to={`product/${id}`}>
                            <div className="image">
                                <img src={image} alt={title} width={'80%'} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">{price}</div>
                                <div className="meta">{category}</div>
                            </div>
                            </Link>
                        </div>
                        
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default ProductComponent