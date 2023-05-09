import React from 'react';
import Avatar from '@mui/material/Avatar';

function SingleProduct(props) {
    const { products }=props;
    console.log(products);
  return (
    <div>
      {
            products.map(product=>(
            <div key={product._id} 
                data-bs-toggle="modal"
                data-bs-target="#productsModal"
                onClick={()=>props.handleShowProductModal(product)
                }>
              <div className="menu_item_wrapper">
                <div className="menu_item">
                    <Avatar
                        alt="Product"
                        src={product.product_image}
                        sx={{ width: 56, height: 56 }}
                    />
                    <div style={{marginTop:"-4px"}}>
                        <p>{product.product_name}</p>
                        <p>${product.price}</p>
                        <p>{product.supermarket.address}</p>
                    </div>
                </div>
                <div className="supermarket_name">{product.supermarket.super_name}</div>
              </div>
              </div>
            ))
          }
    </div>
  )
}

export default SingleProduct
