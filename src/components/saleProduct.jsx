import React, {useState} from 'react'

function saleProduct({data, setCartCount, cartCount}) {
    let [toggle, setToggle]= useState(true);
    return (
        <>
            <div className="col mb-5">
                <div className="card h-100">
                    {/* <!-- Sale badge--> */}
                    <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                    {/* <!-- Product image--> */}
                    <img className="card-img-top" src={data.imgUrl} alt="product name" />
                    {/* <!-- Product details--> */}
                    <div className="card-body p-4">
                        <div className="text-center">

                            {/* <!-- Product name--> */}
                            <h5 className="fw-bolder">{data.productName}</h5>
                            {/* <!-- Product reviews--> */}
                            {data.isReview && (
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                                <div className="bi-star-fill"></div>
                            </div>
                        )}
                            {/* <!-- Product price--> */}
                            <span className="text-muted text-decoration-line-through">{data.oldCost}</span>
                            {data.newCost}
                        </div>
                    </div>
                    {/* <!-- Product actions--> */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        {/* Code to set button as toggle for add to cart and remove from cart */}
                        {
                            toggle?<div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCartCount(cartCount+1)
                                setToggle(false)
                            }} href="#!">Add to cart</a></div> :
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={()=>{
                                setCartCount(cartCount-1)
                                setToggle(true)
                            }} href="#!">Remove from cart</a></div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default saleProduct