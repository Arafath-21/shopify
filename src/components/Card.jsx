import React,{useState} from 'react'

function Card({cart,setCart,product}) {
    let [toggle,setToggle] = useState(true);
  return <>    
    <div className="col mb-5">
        <div className="card h-100">{
            product.isBadge?<div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{product.badge}</div>:""
        }            
            <img className="card-img-top" src={`https://source.unsplash.com/450x300/?${product.img}`}alt="..." />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{product.name}</h5>
                    {
                        product.isPriceRange ? `${product.price} - ${product.range}` :""
                    }                   
                    {
                        product.isRating ?
                    (<div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                    </div>) : ""
                    } 
                    <div className='d-flex justify-content-center fs-5'>
                    {
                        product.isStrikePrice ? <p className="text-muted text-decoration-line-through me-1 ">{product.strikePrice}</p> : ""
                    }
                    {
                        product.isOriginalPrice ? <span>{product.originalPrice}</span> : ""
                    }
                    </div>

                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                {
                    product.isOption?<div className="text-center"><button className="btn btn-outline-dark mt-auto">View options</button></div>:
                    (
                        toggle?<div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart+1); setToggle(!toggle)}}>Add to Cart</button></div> :
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>{setCart(cart-1); setToggle(!toggle)}}>Remove from Cart</button></div>
                    )
                }
            </div>
        </div>
    </div>
  </>
}

export default Card