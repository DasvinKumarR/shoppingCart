import React, {useState} from 'react'
import SaleProduct from "./components/saleProduct"
import Product from './components/product'

function App(){

  // Setting up cart count
  let [cartCount, setCartCount] = useState(0);

  // Data for product cards
  let data = [{
    isSaleProduct: false,
    isReview:false,
    productName:'Fancy Product',
    imgUrl:'https://i2-prod.mirror.co.uk/incoming/article19567759.ece/ALTERNATES/s1200/0_Screen-Shot-2019-09-05-at-084117.png',
    cost: '$40.00 - $80.00'
},
{
  isSaleProduct: true,
  isReview:true,
  productName:'RC Turbo',
  imgUrl:'https://sc01.alicdn.com/kf/HTB1xwVoPpXXXXakXXXXq6xXFXXXw.jpg',
  oldCost:'$45.00',
  newCost:' $35.00'
},
{
  isSaleProduct: true,
  isReview:false,
  productName:'Nikon',
  imgUrl:'https://www.bhphotovideo.com/images/images2500x2500/nikon_26497_coolpix_s9900_digital_camera_1120462.jpg',
  oldCost:'$250.00',
  newCost: ' $150.00'
},
{
  isSaleProduct: true,
  isReview:true,
  productName:'IPhone 15',
  imgUrl:'https://itechstore.co.in/uploads/products/15-hero.jpg',
  oldCost: '$650.00',
  newCost:' $450.00'
},
{
  isSaleProduct: true,
  isReview:false,
  productName:'DELL Laptop',
  imgUrl:'https://i5.walmartimages.com/asr/8958ec19-817b-4493-9f8d-78286102c695.79b3bc27ec5282456d13c823e95e15bc.jpeg',
  oldCost:'$750.00',
  newCost:' $500.00'
},
{
  isSaleProduct: false,
  isReview:false,
  productName:'Cosmetics',
  imgUrl:'https://cdn.shopify.com/s/files/1/0554/9424/6423/files/hero-desk_2_a7af6170-3cff-4876-8b2d-043b294b4927.png?v=1654967076',
  cost: '$10.00 - $100.00'
},
{
  isSaleProduct: true,
  isReview:true,
  productName:'Kids play Car',
  imgUrl:'https://image.made-in-china.com/2f0j00RmbTnGYIJocf/11671518-Remote-Car-Toys-for-Kids-12V-Rechargeable-Children-Toys-Car-Kids-Toys.jpg',
  oldCost:'$150.00',
  newCost:' $50.00'
},
{
  isSaleProduct: true,
  isReview:true,
  productName:'Smart Watch',
  imgUrl:'https://cdn.mos.cms.futurecdn.net/DxpaKaHPBL5yF8vBjh2MjX.jpg',
  oldCost:'$250.00',
  newCost:' $100.00'
}
]
  return(
    <>
    {/* navigaton bar for shopping cart */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Shopping Cart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
                        </button>
                    </form>
                </div>
            </div>
      </nav>
    {/* Header which contains highlights */}
      <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With shopping cart Awesome Deals</p>
                </div>
            </div>
      </header>
    {/* Section contains  */}
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                  // Calling array data by looping and creating card for each data passed
                  data.map((e,i)=>{
                    if(e.isSaleProduct){
                      // Calling sale product to create card by passing data and card count details
                      return <SaleProduct data={e} key={i} setCartCount={setCartCount} cartCount={cartCount}/>
                    }else{
                      return <Product data={e} key={i}/>
                    }
                  })
                }
                </div>
            </div>
    </section>
    {/* <!-- Footer--> */}
    <footer className="py-5 bg-dark">
      <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Shopping Cart 2024</p></div>
    </footer>
    </>
  )
}

export default App