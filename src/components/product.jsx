import React from 'react'

function product({ data }) {

    return (
        <>
            <div className="col mb-5">
                <div className="card h-100">
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
                        {data.cost}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                </div>
            </div>
        </div >
        </>
    )
}

export default product